import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  href = "#",
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-1";

  const styles = {
    primary:
      "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 text-white shadow-lg hover:scale-105",

    secondary:
      "border border-zinc-300 bg-white/60 text-zinc-900 backdrop-blur-md hover:bg-zinc-100 dark:border-zinc-500 dark:bg-zinc-900/40 dark:text-white dark:hover:bg-zinc-800",
  };

  return (
    <a href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </a>
  );
}