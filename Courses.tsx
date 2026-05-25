import { useState } from "react";
import { Link } from "wouter";

const allCourses = [
  { title: "Biology 101", subject: "Science", level: "Beginner", duration: "8 weeks", icon: "🧬", color: "from-green-400 to-teal-500", students: 1240 },
  { title: "Calculus I", subject: "Math", level: "Intermediate", duration: "10 weeks", icon: "∫", color: "from-blue-400 to-indigo-500", students: 980 },
  { title: "World History", subject: "History", level: "Beginner", duration: "6 weeks", icon: "📜", color: "from-amber-400 to-orange-500", students: 1540 },
  { title: "Chemistry", subject: "Science", level: "Intermediate", duration: "12 weeks", icon: "⚗️", color: "from-purple-400 to-violet-500", students: 760 },
  { title: "English Literature", subject: "English", level: "Beginner", duration: "8 weeks", icon: "📖", color: "from-pink-400 to-rose-500", students: 1120 },
  { title: "Physics", subject: "Science", level: "Advanced", duration: "14 weeks", icon: "⚡", color: "from-yellow-400 to-orange-400", students: 640 },
  { title: "Algebra II", subject: "Math", level: "Intermediate", duration: "10 weeks", icon: "📐", color: "from-cyan-400 to-blue-500", students: 870 },
  { title: "Art History", subject: "History", level: "Beginner", duration: "5 weeks", icon: "🎨", color: "from-red-400 to-pink-500", students: 920 },
  { title: "Statistics", subject: "Math", level: "Advanced", duration: "12 weeks", icon: "📊", color: "from-teal-400 to-green-500", students: 540 },
];

const subjects = ["All", "Science", "Math", "History", "English"];
const levels = ["All", "Beginner", "Intermediate", "Advanced"];

export default function Courses() {
  const [subject, setSubject] = useState("All");
  const [level, setLevel] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = allCourses.filter((c) => {
    return (
      (subject === "All" || c.subject === subject) &&
      (level === "All" || c.level === level) &&
      c.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-4">Browse Courses</h1>
          <p className="text-blue-200 text-lg mb-8">Find the perfect course to boost your skills and grades.</p>
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-md mx-auto block px-5 py-3 rounded-xl shadow-md text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-3 mb-8">
          <div className="flex gap-2 flex-wrap">
            {subjects.map((s) => (
              <button
                key={s}
                onClick={() => setSubject(s)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${subject === s ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="flex gap-2 flex-wrap ml-4">
            {levels.map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${level === l ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">No courses match your filters.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course) => (
              <div
                key={course.title}
                className="rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className={`h-32 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                  <span className="text-5xl">{course.icon}</span>
                </div>
                <div className="p-5 bg-white">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">{course.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${course.level === "Beginner" ? "bg-green-100 text-green-700" : course.level === "Intermediate" ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span>⏱ {course.duration}</span>
                    <span>👥 {course.students.toLocaleString()} students</span>
                  </div>
                  <Link href="/login" className="block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 rounded-lg transition-colors">
                    Enroll Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
