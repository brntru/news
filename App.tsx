import { Switch, Route, Router as WouterRouter, Link, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Gallery from "@/pages/Gallery";
import Preview from "@/pages/Preview";
import Courses from "@/pages/Courses";
import Pricing from "@/pages/Pricing";
import Resources from "@/pages/Resources";
import Login from "@/pages/Login";
import Dashboard from "@/pages/Dashboard";

const queryClient = new QueryClient();

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/gallery" },
  { label: "Preview", href: "/preview" },
];

function DarkToggle() {
  const { dark, toggle } = useDarkMode();
  return (
    <button
      onClick={toggle}
      className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}

function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="text-lg font-bold text-gray-900 dark:text-white">StudyPoint</span>
        </Link>
        <div className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${location === link.href ? "text-blue-600" : "text-gray-600 dark:text-gray-300 hover:text-blue-600"}`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/login" className="text-sm font-medium bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Login/Sign Up
          </Link>
          <DarkToggle />
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="text-white font-bold text-lg">StudyPoint</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
          <div>
            <p className="text-white font-semibold text-sm mb-3">Learn</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses" className="hover:text-white transition-colors">Courses</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
              <li><Link href="/preview" className="hover:text-white transition-colors">Preview</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-3">Company</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/gallery" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-3">Account</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/login" className="hover:text-white transition-colors">Log In</Link></li>
              <li><Link href="/login" className="hover:text-white transition-colors">Sign Up</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-xs text-gray-600">
          © 2026 StudyPoint. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

const pageVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18, ease: "easeIn" } },
};

function AnimatedPage({ children }: { children: React.ReactNode }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

function Router() {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16">
        <AnimatePresence mode="wait">
          <Switch key={location} location={location}>
            <Route path="/">
              <AnimatedPage><Home /></AnimatedPage>
            </Route>
            <Route path="/courses">
              <AnimatedPage><Courses /></AnimatedPage>
            </Route>
            <Route path="/pricing">
              <AnimatedPage><Pricing /></AnimatedPage>
            </Route>
            <Route path="/resources">
              <AnimatedPage><Resources /></AnimatedPage>
            </Route>
            <Route path="/gallery">
              <AnimatedPage><Gallery /></AnimatedPage>
            </Route>
            <Route path="/preview">
              <AnimatedPage><Preview /></AnimatedPage>
            </Route>
            <Route path="/login">
              <AnimatedPage><Login /></AnimatedPage>
            </Route>
            <Route path="/dashboard">
              <AnimatedPage><Dashboard /></AnimatedPage>
            </Route>
            <Route>
              <AnimatedPage><NotFound /></AnimatedPage>
            </Route>
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
