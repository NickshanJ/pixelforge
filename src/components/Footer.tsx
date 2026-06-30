"use client";

import Link from "next/link";
import Container from "@/components/common/Container";
import { footerLinks, socialLinks } from "@/data/footer";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-zinc-200 bg-white py-12 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <Container>
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="bg-linear-to-r from-violet-600 via-fuchsia-500 to-cyan-400 bg-clip-text text-3xl font-black text-transparent transition-transform duration-300 hover:scale-105">
              PixelForge
            </h2>
            <p className="mt-5 max-w-sm leading-8 text-zinc-600 dark:text-zinc-400">
              We craft premium digital experiences that help businesses grow,
              connect with users, and stand out in the digital world.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-all duration-300 text-zinc-600 dark:text-zinc-400 hover:text-violet-600 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
              Follow Us
            </h3>
            <div className="mt-5 flex gap-4">
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-300 bg-white/40 text-zinc-700 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-violet-500 hover:bg-violet-600 hover:text-white dark:border-zinc-500 dark:bg-zinc-800/40 dark:text-white"
                  >
                    <Icon size={20} strokeWidth={2.2} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-200 pt-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
          © 2026 PixelForge. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}