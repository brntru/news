import { Link } from "wouter";
import heroImage from "@/assets/Gemini_Generated_Image_m2qu69m2qu69m2qu_1779589373812.png";

export default function Gallery() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-4">About StudyPoint</h1>
          <p className="text-blue-200 text-lg">
            Empowering students worldwide with a modern, flexible learning experience.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Study Space, Reimagined</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            StudyPoint brings high-quality education to your fingertips — whether you're at home, in a café, or on the go.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100">
          <img src={heroImage} alt="StudyPoint platform preview" className="w-full h-auto object-cover" />
        </div>
        <div className="mt-8 text-center text-sm text-gray-400 italic">
          StudyPoint — designed for focused, effective learning anywhere.
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">Why Students Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: "🎯", title: "Focused Learning", desc: "Courses designed by experts to keep you on track and progressing efficiently." },
              { icon: "🌍", title: "Learn Anywhere", desc: "Access all your courses and materials from any device, at any time." },
              { icon: "🏆", title: "Proven Results", desc: "Thousands of students have improved their grades and confidence with StudyPoint." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Start Your Journey Today</h2>
          <p className="text-gray-500 mb-8">Join StudyPoint and unlock a world of high-quality courses, flexible scheduling, and expert guidance.</p>
          <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow">
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
