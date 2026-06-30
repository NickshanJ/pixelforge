"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BarChart3, Layers3 } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import SectionBadge from "@/components/common/SectionBadge";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
];

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" 
    className="relative overflow-hidden pt-32 pb-5 lg:pt-30 lg:pb-10">
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <Container>
        <div className="grid items-center gap-20 lg:gap-24 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <SectionBadge>
              <Sparkles className="mr-2 h-4 w-4" />
              Award Winning Digital Agency
            </SectionBadge>

            <h1 id="hero-heading" 
            className="max-w-xl mt-8 text-5xl font-black leading-tight text-zinc-900 dark:text-white md:text-6xl 2xl:text-7xl">
              We Craft{" "}
              <span className="bg-linear-to-r from-violet-600 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
                Digital Experiences
              </span>{" "}
              That Leave A Mark
            </h1>

            <p className="mt-5 2xl:mt-8 max-w-xl text-base md:text-lg leading-9 text-zinc-600 dark:text-zinc-400">
              PixelForge transforms ambitious ideas into premium digital
              experiences through strategy, branding, UI/UX design and modern
              web development.
            </p>

            <div className="mt-7 2xl:mt-12 flex flex-wrap gap-5">
              <Button href="#portfolio">View Our Work</Button>
              <Button href="#contact" variant="secondary">
                Get Started
              </Button>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl border border-zinc-200 dark:border-zinc-800 p-6 bg-white/70 dark:bg-zinc-900/60 backdrop-blur"
                >
                  <h3 className="text-3xl font-black text-zinc-900 dark:text-white">
                    {item.value}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-500">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right */}
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} whileHover={{ y: -8, scale: 1.01, }} 
          transition={{ duration: 0.8 }} className="relative mx-auto w-full max-w-xl">
            <div className="relative rounded-4xl border border-zinc-200 dark:border-zinc-800 bg-white/70 p-7 
            shadow-2xl backdrop-blur-xl dark:bg-zinc-900/70 md:p-10">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 blur-3xl" />
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold dark:text-white">
                  Creative Dashboard
                </h3>
                <div className="rounded-full bg-violet-100 dark:bg-violet-900/40 p-2">
                  <Layers3 className="h-5 w-5 text-violet-600" />
                </div>
              </div>

              <div className="mt-10 space-y-6">
                {[
                  { name: "UI Design", width: "w-full" },
                  { name: "Branding", width: "w-4/5" },
                  { name: "Development", width: "w-11/12" },
                  { name: "Marketing", width: "w-3/4" },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="mb-2 flex justify-between text-sm dark:text-zinc-300">
                      <span>{item.name}</span>
                      <span>Active</span>
                    </div>
                    <div className="h-3 rounded-full bg-zinc-200 dark:bg-zinc-800">
                      <div
                        className={`h-3 rounded-full bg-linear-to-r from-violet-600 via-fuchsia-500 to-cyan-400 ${item.width}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-3xl bg-zinc-100 dark:bg-zinc-800 p-6">
                <div className="flex items-center gap-3">
                  <BarChart3 className="text-cyan-500" />
                  <div>
                    <h4 className="font-semibold dark:text-white">
                      Performance Growth
                    </h4>
                    <p className="text-sm text-zinc-500">+32% this month</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between rounded-2xl bg-linear-to-r from-violet-600 via-fuchsia-500 to-cyan-400 p-6 text-white">
                <div>
                  <p className="text-sm opacity-80">Ready to build?</p>
                  <h4 className="font-bold">Let's Create Something Amazing</h4>
                </div>
                <ArrowRight />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}