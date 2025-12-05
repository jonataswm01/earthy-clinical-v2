"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

type MenuOverlayProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const links = [
  { label: "Home", href: "/" },
  { label: "A Profissional", href: "#profissional" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "/contato" },
];

export default function MenuOverlay({ isOpen, setIsOpen }: MenuOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-6 top-6 text-4xl text-white/70 transition hover:text-white md:right-12 md:top-12"
            aria-label="Fechar menu"
          >
            &times;
          </button>
          <div className="flex h-full items-center justify-center">
            <nav className="flex flex-col gap-6 text-center md:gap-8">
              {links.map((link, index) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.1 * index,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group inline-flex items-center justify-center rounded-full px-8 py-4 font-serif text-5xl uppercase text-white transition hover:bg-white/5 md:px-14 md:py-6 md:text-7xl"
                  >
                    <span className="transition group-hover:opacity-70 group-hover:tracking-[0.05em]">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


