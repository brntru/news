import { useState } from "react";

const resources = [
  { title: "Study Skills Guide", type: "PDF", subject: "General", icon: "📄", desc: "Master time management, note-taking, and exam preparation strategies.", downloads: 4200 },
  { title: "Math Formula Cheat Sheet", type: "PDF", subject: "Math", icon: "📐", desc: "All the key formulas for algebra, geometry, calculus, and statistics.", downloads: 6800 },
  { title: "Biology Flashcards", type: "Flashcards", subject: "Science", icon: "🧬", desc: "500+ flashcards covering cells, genetics, ecosystems, and more.", downloads: 3100 },
  { title: "History Timeline Poster", type: "PDF", subject: "History", icon: "📜", desc: "A comprehensive visual timeline of world history from ancient to modern.", downloads: 2900 },
  { title: "Essay Writing Template", type: "Template", subject: "English", icon: "✍️", desc: "A step-by-step framework for writing clear, structured academic essays.", downloads: 5500 },
  { title: "Chemistry Periodic Table", type: "PDF", subject: "Science", icon: "⚗️", desc: "A full colour periodic table with element properties and atomic numbers.", downloads: 7200 },
  { title: "Physics Equation Sheet", type: "PDF", subject: "Science", icon: "⚡", desc: "Key equations for mechanics, thermodynamics, waves, and electricity.", downloads: 4400 },
  { title: "Reading Comprehension Guide", type: "Template", subject: "English", icon: "📖", desc: "Techniques to improve reading speed, retention, and critical analysis.", downloads: 2600 },
  { title: "Statistics Workbook", type: "Worksheet", subject: "Math", icon: "📊", desc: "Practice problems and worked examples for probability and statistics.", downloads: 1900 },
];

const types = ["All", "PDF", "Flashcards", "Template", "Worksheet"];
const subjects = ["All", "General", "Math", "Science", "History", "English"];

export default function Resources() {
  const [type, setType] = useState("All");
  const [subject, setSubject] = useState("All");

  const filtered = resources.filter((r) =>
    (type === "All" || r.type === type) &&
    (subject === "All" || r.subject === subject)
  );

  return (
    <div>
      <section className="bg-gradient-to-br from-teal-600 to-green-800 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-4">Study Resources</h1>
          <p className="text-teal-100 text-lg">Free tools, guides, and materials to support your learning journey.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-6 mb-8">
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Type</p>
            <div className="flex gap-2 flex-wrap">
              {types.map((t) => (
                <button key={t} onClick={() => setType(t)} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${type === t ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                  {t}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase mb-2">Subject</p>
            <div className="flex gap-2 flex-wrap">
              {subjects.map((s) => (
                <button key={s} onClick={() => setSubject(s)} className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${subject === s ? "bg-green-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">No resources match your filters.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((r) => (
              <div key={r.title} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{r.icon}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">{r.type}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{r.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">{r.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">⬇ {r.downloads.toLocaleString()} downloads</span>
                  <button className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                    Download Free →
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
