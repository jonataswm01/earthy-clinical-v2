"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const HERO_VIDEO_SRC = "/media/hero.mp4";

export default function Hero() {
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {!videoFailed ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
            onError={() => setVideoFailed(true)}
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-primary/40 via-surface/30 to-accent/30" />
        )}
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="relative flex flex-col items-center px-4 text-center"
      >
        <h1 className="font-serif text-5xl text-primary md:text-9xl">
          Crer & Ser
        </h1>
        <p className="mt-4 font-sans text-sm uppercase tracking-[0.4em] text-foreground/80">
          Psicologia Clínica &amp; Sistêmica
        </p>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-10 flex items-center justify-between px-6 text-xs font-mono text-foreground/70 md:px-10">
        <span>Santa Adélia — SP</span>
        <span className="animate-bounce">Scroll ↓</span>
      </div>
    </section>
  );
}

