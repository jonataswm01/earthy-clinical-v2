"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let frameId: number;
    let startTime: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const animate = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const nextProgress = Math.min(100, (elapsed / 2000) * 100);

      setProgress(nextProgress);

      if (nextProgress < 100) {
        frameId = requestAnimationFrame(animate);
      } else {
        timeoutId = setTimeout(() => {
          setIsReady(true);
          if (typeof window !== "undefined") {
            const w = window as Window & { __PRELOADER_DONE__?: boolean };
            w.__PRELOADER_DONE__ = true;
            window.dispatchEvent(new Event("preloaderComplete"));
          }
        }, 500);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <AnimatePresence>
      {!isReady && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="text-4xl font-serif font-light tracking-[0.3em] text-background md:text-6xl"
          >
            {Math.round(progress)}%
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

