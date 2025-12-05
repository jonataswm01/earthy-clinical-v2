"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";

export default function NextPageTrigger() {
  const router = useRouter();
  const containerRef = useRef<HTMLElement | null>(null);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [isArmed, setIsArmed] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.85 && !isArmed) {
      setIsArmed(true);
    }

    if (latest > 0.99 && isArmed && !isRedirecting) {
      setIsRedirecting(true);
      router.push("/sobre");
    }
  });

  return (
    <section
      ref={containerRef}
      className="relative flex h-[150vh] flex-col items-center justify-center overflow-hidden bg-[#2F3E30] px-6 text-center text-[#F5F2EB]"
    >
      <div className="space-y-4 text-center">
        <motion.p
          style={{ opacity: progress }}
          className="font-mono text-xs uppercase tracking-[0.4em] text-white/50 transition-colors"
        >
          {isRedirecting
            ? "Redirecionando..."
            : isArmed
            ? "Continue rolando para avançar"
            : "Role para cima para navegar"}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="font-serif text-3xl md:text-4xl"
        >
          Próximo capítulo: A Profissional
        </motion.h2>
      </div>

      <div className="mt-6 w-64 rounded-full bg-white/10 p-[2px] shadow-inner md:w-72">
        <div className="h-1 overflow-hidden rounded-full bg-black/30">
          <motion.div
            style={{ scaleX: progress }}
            className={`h-full origin-left transition-colors duration-300 ${
              isRedirecting
                ? "bg-white"
                : isArmed
                ? "bg-[#C47F64]"
                : "bg-white/30"
            }`}
          />
        </div>
      </div>

      <span className="pointer-events-none select-none text-[12vw] font-serif text-white/5">
        Próximo Capítulo
      </span>
    </section>
  );
}


