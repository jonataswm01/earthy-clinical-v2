"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-40 p-6 md:p-10"
    >
      <div className="flex items-center justify-between">
        <span className="font-serif text-xl tracking-tight text-primary">
          Crer &amp; Ser
        </span>
        <button className="rounded-full border border-foreground/20 px-6 py-2 text-sm uppercase tracking-widest text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background">
          Agendar
        </button>
      </div>
    </motion.header>
  );
}

