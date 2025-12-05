"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const manifestoLines = [
  "Não é sobre não sentir dor.",
  "É sobre saber o que fazer com ela.",
  "Acolher sua história é o primeiro passo",
  "para florescer quem você é.",
];

export default function Manifesto() {
  return (
    <section className="flex min-h-[80vh] w-full items-center justify-center bg-background px-6 py-32">
      <div className="max-w-5xl text-center">
        {manifestoLines.map((line, index) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              delay: 0.2 * index,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-3xl text-primary leading-tight md:text-5xl lg:text-6xl"
          >
            {line}
          </motion.p>
        ))}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          className="mx-auto mt-10 flex w-full max-w-xs items-center justify-center gap-3"
        >
          <span className="h-px flex-1 bg-primary/30" />
          <Leaf className="h-8 w-8 text-primary/50" />
          <span className="h-px flex-1 bg-primary/30" />
        </motion.div>
      </div>
    </section>
  );
}

