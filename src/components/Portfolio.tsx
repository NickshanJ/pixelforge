"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/common/Container";
import SectionBadge from "@/components/common/SectionBadge";
import { portfolio } from "@/data/portfolio";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-8 lg:py-14">
      <Container>
        <div className="max-w-5xl mx-auto text-center">
          <SectionBadge>Featured Work</SectionBadge>
          <h2 className="w-full mt-5 text-4xl md:text-5xl font-black leading-tight text-zinc-900 dark:text-white">
            Projects That Showcase Our Creativity
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400 md:text-lg">
            Explore a selection of our recent design and development work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {portfolio.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
            >
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative aspect-16/10 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100" />
              </div>

              <div className="p-7 md:p-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">{item.category}</p>
                <div className="mt-3 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{item.title}</h3>
                  <ArrowUpRight className="text-violet-600 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}