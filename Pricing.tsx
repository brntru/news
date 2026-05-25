import { Link } from "wouter";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for exploring StudyPoint and getting started.",
    color: "border-gray-200",
    badge: null,
    features: [
      "Access to 10 free courses",
      "Basic progress tracking",
      "Community forum access",
      "Mobile app access",
    ],
    cta: "Get Started Free",
    ctaStyle: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    href: "/login",
  },
  {
    name: "Student",
    price: "$9",
    period: "per month",
    description: "Everything you need to excel in your studies.",
    color: "border-blue-500 ring-2 ring-blue-500",
    badge: "Most Popular",
    features: [
      "Unlimited course access",
      "Advanced progress analytics",
      "Priority support",
      "Downloadable study guides",
      "Live Q&A sessions",
      "Certificate on completion",
    ],
    cta: "Start Free Trial",
    ctaStyle: "bg-blue-600 text-white hover:bg-blue-700",
    href: "/login",
  },
  {
    name: "Pro",
    price: "$19",
    period: "per month",
    description: "For serious learners who want the full experience.",
    color: "border-green-400",
    badge: null,
    features: [
      "Everything in Student",
      "1-on-1 tutoring sessions",
      "Custom study plans",
      "Offline course access",
      "Early access to new courses",
      "Ad-free experience",
    ],
    cta: "Go Pro",
    ctaStyle: "bg-green-600 text-white hover:bg-green-700",
    href: "/login",
  },
];

export default function Pricing() {
  return (
    <div>
      <section className="bg-gradient-to-br from-indigo-700 to-blue-900 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricing</h1>
          <p className="text-indigo-200 text-lg">Choose the plan that fits your goals — upgrade or cancel anytime.</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-2xl border-2 ${plan.color} bg-white p-8 shadow-sm hover:shadow-lg transition-shadow`}>
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h2>
                <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="text-gray-400 text-sm mb-1">/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link href={plan.href} className={`block text-center font-semibold py-3 rounded-xl transition-colors ${plan.ctaStyle}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-10">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">Need a plan for your school?</h3>
          <p className="text-gray-500 mb-6 max-w-xl mx-auto">We offer group pricing and custom packages for institutions, schools, and tutoring centres.</p>
          <Link href="/login" className="inline-block bg-gray-900 text-white font-semibold px-8 py-3 rounded-xl hover:bg-gray-800 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
