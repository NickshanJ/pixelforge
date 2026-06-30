"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import SectionBadge from "@/components/common/SectionBadge";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="relative py-8 lg:py-14">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <SectionBadge>Our Services</SectionBadge>

          <h2 className="mt-5 text-4xl font-black leading-tight text-zinc-900 dark:text-white md:text-5xl">
            Everything You Need To Build An Amazing Digital Product
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400 md:text-lg">
            From strategy to launch, PixelForge helps brands design,
            build and grow exceptional digital experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
               className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-violet-600 via-fuchsia-500 to-cyan-400 text-white transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-zinc-900 dark:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-7">
                  {service.description}
                </p>

                <button className="mt-7 inline-flex items-center gap-2 font-semibold text-violet-600 transition-all duration-300 group-hover:gap-3">
                  Learn More
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}