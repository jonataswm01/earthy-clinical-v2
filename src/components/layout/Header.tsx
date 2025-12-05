"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import MenuOverlay from "@/components/layout/MenuOverlay";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "A Profissional", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  type PreloaderWindow = Window & {
    __PRELOADER_DONE__?: boolean;
  };

  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPreloaderDone, setIsPreloaderDone] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return (window as PreloaderWindow).__PRELOADER_DONE__ ?? false;
  });
  useEffect(() => {
    if (typeof window === "undefined") return;
    const w = window as PreloaderWindow;
    if (w.__PRELOADER_DONE__) return;
    const handleComplete = () => setIsPreloaderDone(true);
    window.addEventListener("preloaderComplete", handleComplete);
    return () => window.removeEventListener("preloaderComplete", handleComplete);
  }, []);

  if (!isPreloaderDone) {
    return null;
  }

  return (
    <>
      {/* Mobile Header */}
      <motion.header
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-0 right-0 top-0 z-40 p-6 md:hidden"
      >
        <div className="flex items-center justify-between">
          <span className="font-serif text-xl tracking-tight text-primary">
            Crer &amp; Ser
          </span>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="rounded-full border border-primary/20 px-6 py-2 font-mono text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-white"
          >
            MENU
          </button>
        </div>
      </motion.header>

      {/* Desktop Floating Dock */}
      <motion.div
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 22 }}
        className="fixed left-1/2 top-6 z-50 hidden h-14 w-fit -translate-x-1/2 items-center gap-2 rounded-full border border-white/40 bg-[#F9F9F7]/85 px-2 shadow-lg shadow-black/5 backdrop-blur-md md:flex"
      >
        <div className="mr-1 flex h-10 w-10 items-center justify-center rounded-full border border-[#2F3E30]/10 bg-white text-xs font-serif font-semibold text-[#2F3E30]">
          C&amp;S
        </div>

        <nav className="relative flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                  isActive
                    ? "text-[#5B3A2A] font-semibold"
                    : "text-[#2F3E30]/60 hover:text-[#2F3E30]"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mx-2 hidden h-4 w-px bg-[#2F3E30]/15 lg:block" />

        <Link
          href="/contato"
          className="rounded-full bg-[#2F3E30] px-5 py-2 text-xs font-medium uppercase tracking-wide text-white transition-transform hover:scale-105"
        >
          Agendar
        </Link>
      </motion.div>

      <MenuOverlay isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
    </>
  );
}

