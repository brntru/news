import { Link } from "wouter";
import previewImage from "@/assets/Gemini_Generated_Image_m2qu69m2qu69m2qu_1779589604564.png";

export default function Preview() {
  return (
    <div>
      <section className="bg-gradient-to-br from-green-600 to-teal-800 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-4">Platform Preview</h1>
          <p className="text-green-100 text-lg">
            See exactly what your StudyPoint experience looks like — clean, intuitive, and built for focus.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">A Better Way to Study</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Our platform brings everything you need into one clean workspace — courses, progress tracking, and resources, all at your fingertips.
          </p>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
          <img src={previewImage} alt="StudyPoint platform interface preview" className="w-full h-auto object-cover" />
        </div>
        <div className="mt-6 text-center text-sm text-gray-400 italic">
          StudyPoint — your complete study hub, wherever you are.
        </div>
      </section>

      <section className="bg-green-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">Everything in One Place</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📚", title: "Course Library", desc: "Hundreds of courses across every subject." },
              { icon: "📈", title: "Progress Tracking", desc: "Visual dashboards to keep you on track." },
              { icon: "💬", title: "Community", desc: "Connect with peers and expert tutors." },
              { icon: "📱", title: "Any Device", desc: "Seamlessly switch between desktop and mobile." },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-xl p-5 shadow-sm border border-green-100 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1 text-sm">{f.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Experience It?</h2>
          <p className="text-gray-500 mb-8">Sign up for free and get instant access to our full course library.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/" className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow">
              Get Started Free
            </Link>
            <Link href="/gallery" className="inline-block border border-gray-300 text-gray-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors">
              About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
