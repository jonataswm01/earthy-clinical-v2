"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "“Um ambiente que me lembrou como é respirar com tranquilidade novamente.”",
    position: "top-10 left-10",
  },
  {
    quote:
      "“Cada sessão parece uma conversa íntima com minha própria essência.”",
    position: "bottom-14 right-12",
  },
  {
    quote: "“Um refúgio silencioso onde finalmente consigo me ouvir.”",
    position: "top-1/2 right-1/4",
  },
];

export default function Atmosphere() {
  return (
    <section className="relative flex h-[80vh] w-full items-center justify-center overflow-hidden bg-[#2F3E30]">
      <div className="absolute inset-0 bg-[#2F3E30]">
        <video
          className="h-full w-full object-cover blur-[1px]"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        >
          <source
            src="https://videos.pexels.com/video-files/4253338/4253338-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center text-white">
        <p className="font-serif text-4xl md:text-6xl">
          Um santuário para sua mente.
        </p>
      </div>

      {testimonials.map((testimonial, index) => (
        <motion.div
          key={testimonial.quote}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -15, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 2,
          }}
          className={`absolute max-w-xs rounded-2xl border border-white/20 bg-white/10 p-6 text-white backdrop-blur-md ${testimonial.position}`}
        >
          <p className="font-serif text-lg italic leading-relaxed">
            {testimonial.quote}
          </p>
        </motion.div>
      ))}
    </section>
  );
}

