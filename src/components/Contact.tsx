"use client";

import { motion } from "framer-motion";
import Container from "@/components/common/Container";
import SectionBadge from "@/components/common/SectionBadge";
import Button from "@/components/common/Button";
import { contactInfo } from "@/data/contact";

export default function Contact() {
  return (
    <section id="contact" className="relative py-8 lg:py-14">
      <Container>
        <div className="max-w-5xl mx-auto text-center">
          <SectionBadge>Contact Us</SectionBadge>
          <h2 className="mt-5 text-4xl font-black leading-tight text-zinc-900 dark:text-white md:text-5xl">
            Let's Build Something Great Together
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400 md:text-lg">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Get in Touch</h3>

            <div className="mt-8 space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="rounded-2xl bg-linear-to-r from-violet-600 via-fuchsia-500 to-cyan-400 p-3 text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900 dark:text-white">{item.title}</p>
                      <p className="text-zinc-600 dark:text-zinc-400">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 space-y-5"
          >
            <div className="absolute -left-10 -bottom-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <input  className="w-full rounded-xl border border-zinc-300 bg-transparent p-4 text-zinc-900 placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-700 dark:text-white dark:placeholder:text-zinc-400" placeholder="Your Name" />
            <input type="email"  className="w-full rounded-xl border border-zinc-300 bg-transparent p-4 text-zinc-900 placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-700 dark:text-white dark:placeholder:text-zinc-400" placeholder="Email Address" />
            <input  className="w-full rounded-xl border border-zinc-300 bg-transparent p-4 text-zinc-900 placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-700 dark:text-white dark:placeholder:text-zinc-400" placeholder="Subject" />
            <textarea rows={6} className="w-full resize-none rounded-xl border border-zinc-300 bg-transparent p-4 text-zinc-900 placeholder:text-zinc-500 outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 dark:border-zinc-700 dark:text-white dark:placeholder:text-zinc-400" placeholder="Tell us about your project..." />
            <Button>Send Message</Button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
