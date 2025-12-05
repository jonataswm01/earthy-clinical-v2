"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#2F3E30] px-6 py-24 text-[#F9F9F7] md:px-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <h2 className="mb-10 font-serif text-3xl opacity-90 md:text-5xl">
          Iniciar sua jornada
        </h2>

        <motion.a
          href="https://wa.me/5517997723577"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block rounded-full bg-[#C47F64] px-10 py-5 text-lg font-medium text-white shadow-lg transition-colors hover:bg-[#b06f56] md:text-xl"
        >
          Agendar via WhatsApp
        </motion.a>
      </div>

      <div className="relative z-10 mt-24 flex w-full flex-col items-center gap-4 border-t border-white/10 pt-8 text-center font-mono text-xs opacity-60 md:flex-row md:justify-between md:text-left">
        <p>© 2024 Crer & Ser. Todos os direitos reservados.</p>
        <p>Rua Cel. Relíquias Guimarães, 72 - Santa Adélia/SP</p>
        <p>CRP 06/144503</p>
      </div>
    </footer>
  );
}

