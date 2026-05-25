import { Link } from "wouter";

const enrolled = [
  { title: "Biology 101", progress: 72, icon: "🧬", color: "bg-green-500", nextLesson: "Cell Division", dueIn: "Today" },
  { title: "Calculus I", progress: 45, icon: "∫", color: "bg-blue-500", nextLesson: "Integration by Parts", dueIn: "Tomorrow" },
  { title: "World History", progress: 90, icon: "📜", color: "bg-amber-500", nextLesson: "Cold War Era", dueIn: "In 3 days" },
];

const upcoming = [
  { title: "Live Q&A: Biology", date: "Today", time: "4:00 PM", type: "Live Session", color: "bg-green-100 text-green-700" },
  { title: "Calculus Quiz 3", date: "Tomorrow", time: "2:00 PM", type: "Quiz", color: "bg-blue-100 text-blue-700" },
  { title: "Essay Submission", date: "May 27", time: "11:59 PM", type: "Assignment", color: "bg-purple-100 text-purple-700" },
  { title: "Live Q&A: History", date: "May 28", time: "3:30 PM", type: "Live Session", color: "bg-amber-100 text-amber-700" },
];

const recentActivity = [
  { action: "Completed", item: "Photosynthesis — Lesson 8", time: "2 hours ago", icon: "✅" },
  { action: "Scored 88%", item: "Biology Quiz 2", time: "Yesterday", icon: "🏆" },
  { action: "Downloaded", item: "Math Formula Cheat Sheet", time: "2 days ago", icon: "📄" },
  { action: "Enrolled in", item: "World History", time: "4 days ago", icon: "🎓" },
];

const stats = [
  { label: "Courses Enrolled", value: "3", icon: "📚", color: "bg-blue-50 text-blue-600" },
  { label: "Hours Studied", value: "47", icon: "⏱", color: "bg-green-50 text-green-600" },
  { label: "Avg. Score", value: "84%", icon: "🏆", color: "bg-amber-50 text-amber-600" },
  { label: "Certificates", value: "1", icon: "🎓", color: "bg-purple-50 text-purple-600" },
];

export default function Dashboard() {
  return (
    <div className="bg-gray-50 min-h-full">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-700 px-6 py-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-blue-200 text-sm mb-1">Welcome back 👋</p>
            <h1 className="text-3xl font-bold text-white">Jane Smith</h1>
            <p className="text-blue-200 text-sm mt-1">Student · Free Plan</p>
          </div>
          <Link
            href="/pricing"
            className="hidden sm:inline-block bg-white text-blue-700 font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-50 transition-colors text-sm shadow"
          >
            Upgrade to Student ↗
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className={`rounded-xl p-5 flex items-center gap-4 ${s.color} bg-opacity-10`} style={{ background: "white" }}>
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl ${s.color}`}>
                {s.icon}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Enrolled Courses */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">My Courses</h2>
              <Link href="/courses" className="text-sm text-blue-600 hover:underline font-medium">Browse more →</Link>
            </div>
            {enrolled.map((course) => (
              <div key={course.title} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${course.color} flex items-center justify-center text-lg`}>
                      {course.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{course.title}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">Next: {course.nextLesson}</p>
                    </div>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${course.dueIn === "Today" ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600"}`}>
                    {course.dueIn}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-2 rounded-full ${course.color} transition-all`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-700 w-10 text-right">{course.progress}%</span>
                </div>
                <div className="mt-4 flex gap-2">
                  <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg transition-colors">
                    Continue →
                  </button>
                  <button className="px-4 border border-gray-200 text-gray-600 text-sm font-medium py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    Notes
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Upcoming */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Upcoming</h2>
              <div className="space-y-3">
                {upcoming.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 text-center flex-shrink-0">
                      <div className="text-xs font-bold text-gray-400">{item.date}</div>
                      <div className="text-xs text-gray-400">{item.time}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 leading-tight truncate">{item.title}</p>
                      <span className={`inline-block mt-0.5 text-xs px-2 py-0.5 rounded-full font-medium ${item.color}`}>
                        {item.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((a) => (
                  <div key={a.item} className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0 mt-0.5">{a.icon}</span>
                    <div className="min-w-0">
                      <p className="text-sm text-gray-700 leading-tight">
                        <span className="font-medium">{a.action}</span> {a.item}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">{a.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
