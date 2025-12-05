"use client";

import { motion } from "framer-motion";

const easingBezier: [number, number, number, number] = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easingBezier,
    },
  },
};

const textGroup = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easingBezier,
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easingBezier,
    },
  },
};

const profileDetails = [
  { label: "CRP", value: "06/144503" },
  { label: "Especialidade", value: "Clínica & Sistêmica" },
  { label: "Exp", value: "+150 Vidas Impactadas" },
  { label: "Local", value: "Santa Adélia - SP" },
];

const PROFILE_IMAGE =
  "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1100&q=80";

export default function Profile() {
  return (
    <section className="px-6 py-24 md:px-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="grid grid-cols-1 gap-8 md:grid-cols-12"
      >
        <motion.div
          variants={fadeUp}
          className="relative h-[500px] overflow-hidden rounded-[2rem] bg-stone-300 md:col-span-5 md:h-[600px]"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${PROFILE_IMAGE})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-primary/10 to-transparent" />
        </motion.div>

        <motion.div
          variants={textGroup}
          className="md:col-span-7 flex flex-col justify-center space-y-8"
        >
          <motion.span
            variants={textItem}
            className="font-mono text-xs uppercase tracking-widest text-accent"
          >
            // A PROFISSIONAL
          </motion.span>

          <motion.h2
            variants={textItem}
            className="font-serif text-4xl leading-tight text-primary md:text-5xl"
          >
            Uma abordagem discreta, solidária e imparcial.
          </motion.h2>

          <motion.p
            variants={textItem}
            className="font-sans text-lg text-foreground/80"
          >
            A terapia não é sobre consertar o que está quebrado, mas sobre
            fortalecer o que existe de mais autêntico em você. Sou Alaídes Nunes
            Franco, psicóloga dedicada a criar um ambiente seguro.
          </motion.p>

          <motion.div
            variants={textItem}
            className="grid grid-cols-2 gap-4 border-t border-primary/10 pt-6"
          >
            {profileDetails.map((detail) => (
              <div key={detail.label} className="font-mono text-sm text-primary">
                <span className="block text-xs uppercase tracking-wide text-primary/60">
                  {detail.label}
                </span>
                <span>{detail.value}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

