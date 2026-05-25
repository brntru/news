import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

const heroVideo = `${import.meta.env.BASE_URL}hero.mp4`;

const courses = [
  {
    title: "Biology 101",
    description: "Explore the fundamentals of life science, cells, and ecosystems.",
    color: "from-green-400 to-teal-500",
    icon: "🧬",
  },
  {
    title: "Calculus",
    description: "Master differentiation, integration, and calculates and calculus.",
    color: "from-blue-400 to-indigo-500",
    icon: "∫",
  },
  {
    title: "History",
    description: "Lorem ipsum dolor sit amet, consectetur history.",
    color: "from-amber-400 to-orange-500",
    icon: "📜",
  },
];

const testimonials = [
  {
    name: "Jesse Reader",
    role: "Develops consistent with interesting fictitious company",
    initials: "JR",
    color: "bg-blue-500",
  },
  {
    name: "Jenny Bonsin",
    role: "Compress door sit consectetur fictitious company",
    initials: "JB",
    color: "bg-green-500",
  },
];

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    const tryPlay = () => {
      video.play().then(() => setPaused(false)).catch(() => setPaused(true));
    };
    video.addEventListener("canplay", tryPlay, { once: true });
    tryPlay();
    return () => video.removeEventListener("canplay", tryPlay);
  }, []);

  const handleOverlayClick = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().then(() => setPaused(false)).catch(() => {});
  };

  return (
    <div>
      {/* Hero Video Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden bg-gray-900">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-90"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        {paused && (
          <button
            onClick={handleOverlayClick}
            className="absolute inset-0 z-20 flex items-end justify-end p-6 cursor-default"
            aria-label="Play background video"
          >
            <span className="flex items-center gap-2 bg-black/40 hover:bg-black/60 text-white text-xs font-medium px-3 py-2 rounded-full backdrop-blur-sm transition-colors cursor-pointer">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M3 2l7 4-7 4V2z"/>
              </svg>
              Play video
            </span>
          </button>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              Enhance Your Study Experience. Anytime, Anywhere.
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Bring yourself high-quality at anytime with your study experience, and condition, anywhere.
            </p>
            <Link
              href="/preview"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-7 py-3 rounded-lg transition-colors shadow-lg"
            >
              Explore Our Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Courses & Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Featured Courses */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div
                  key={course.title}
                  className="rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer group"
                >
                  <div className={`h-28 bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                    <span className="text-4xl">{course.icon}</span>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">{course.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h2>
            <div className="space-y-4">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-100"
                >
                  <div
                    className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Join thousands of students already improving their skills with StudyPoint.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/courses"
              className="bg-white text-blue-600 font-semibold px-7 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Browse Courses
            </Link>
            <Link
              href="/gallery"
              className="border border-white/40 text-white font-semibold px-7 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              See Our Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
