"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Moon, Sun, Sparkles } from "lucide-react";
import { navigation } from "@/data/navigation";

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background blur
      setIsScrolled(currentScrollY > 20);

      // Show navbar when scrolling up
      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      // Hide navbar when scrolling down
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      }

      // Always show near the top
      if (currentScrollY < 100) {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <motion.header initial={{ y: 0 }} animate={{ y: showNavbar ? 0 : -120, }}
        transition={{ duration: 0.3, ease: "easeInOut", }}
        className="fixed top-0 left-0 z-50 w-full px-4 pt-5">
        <div className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-300 shadow-md
          ${
            isScrolled
              ? "bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl shadow-xl border-zinc-200 dark:border-zinc-800"
              : "bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg border-transparent"
          }`}>
          <div className="flex h-20 items-center justify-between px-8">
            {/* Logo */}

            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="group flex items-center gap-2 text-2xl font-bold"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-500 text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <Sparkles size={20} />
              </div>

              <span className="bg-linear-to-r from-violet-600 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent transition-all duration-300 group-hover:tracking-wide">
                PixelForge
              </span>
            </Link>

            {/* Desktop Menu */}

            <nav className="hidden lg:flex items-center gap-10">
              {navigation.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="relative text-sm font-medium text-zinc-700 transition-colors duration-300 hover:text-violet-600 dark:text-zinc-200 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-violet-600 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.title}
                </a>
              ))}
            </nav>

            {/* Right Side */}

            <div className="flex items-center gap-3">
              {/* Theme */}

              <button
                onClick={toggleDarkMode}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 text-zinc-700 transition-all duration-300 hover:scale-110 hover:border-violet-500 hover:text-violet-600 dark:border-zinc-500 dark:text-white"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* CTA */}

              <a
                href="#contact"
                className="hidden md:flex items-center rounded-full bg-linear-to-r from-violet-600 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
              >
                Let's Talk
              </a>

              {/* Mobile */}

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 transition-all duration-300 hover:scale-110 hover:border-violet-500 lg:hidden dark:border-zinc-700"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed top-28 left-4 right-4 z-40 rounded-2xl border border-zinc-200 dark:border-zinc-800 
            bg-white dark:bg-zinc-900 shadow-xl lg:hidden"
          >
            <div className="flex flex-col py-6">
              {navigation.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-8 py-4 text-zinc-700 transition-colors duration-300 hover:bg-violet-50 hover:text-violet-600 dark:text-zinc-200 dark:hover:bg-zinc-800"
                >
                  {item.title}
                </a>
              ))}

              <div className="px-8 mt-4">
                <a
                  href="#contact"
                  className="flex justify-center rounded-full bg-linear-to-r from-violet-600 to-fuchsia-500 py-3 font-semibold text-white"
                >
                  Let's Talk
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}