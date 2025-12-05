"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { Brain, Sprout, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "01",
    title: "Psicoterapia",
    subtitle: "O Eu",
    desc: "Ansiedade, autoconhecimento e relacionamentos. Organize o caos interno.",
    icon: Brain,
    color: "bg-[#F5F2EB]",
    border: false,
  },
  {
    id: "02",
    title: "Psicopedagogia",
    subtitle: "O Aprender",
    desc: "Superando barreiras de aprendizagem. Foco em TDAH e Autismo com afeto.",
    icon: Users,
    color: "bg-[#FFFFFF]",
    border: true,
  },
  {
    id: "03",
    title: "Constelação",
    subtitle: "A Origem",
    desc: "Honrar as raízes para liberar o futuro. Um olhar sistêmico.",
    icon: Sprout,
    color: "bg-[#F3E6E2]",
    border: false,
  },
] as const;

type ServiceItem = (typeof services)[number];

const MobileCard = ({ item, index }: { item: ServiceItem; index: number }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [0, 1, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={cn(
        "w-full min-h-[420px] rounded-[2.5rem] p-8 flex flex-col justify-between overflow-hidden border border-primary/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]",
        item.color,
        item.border && "border-primary/10"
      )}
    >
      <div>
        <span className="font-mono text-xs uppercase tracking-[0.6em] text-primary/60">
          {item.subtitle}
        </span>
        <h3 className="mt-4 font-serif text-3xl text-primary">{item.title}</h3>
      </div>
      <p className="font-sans text-base text-foreground/80">{item.desc}</p>
      <item.icon className="mt-6 h-12 w-12 text-primary/50" />
      <span className="self-end font-mono text-xs text-primary/40">
        0{index + 1}
      </span>
    </motion.div>
  );
};

export default function Services() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });

  const xRange: [string, string] = isMobile
    ? ["0px", "0px"]
    : ["0px", `-${scrollDistance}px`];

  const x = useTransform(scrollYProgress, [0, 1], xRange);
  const smoothX: MotionValue<string> = useSpring(x, {
    stiffness: 120,
    damping: 25,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const handleResize = () => {
      if (!trackRef.current || !rightRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const containerWidth = rightRef.current.offsetWidth;
      const distance = Math.max(0, trackWidth - containerWidth + 100);
      setScrollDistance(distance);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F9F9F7] overflow-clip"
    >
      {/* Mobile */}
      <div className="flex flex-col gap-8 px-6 py-20 md:hidden">
        <div className="mb-6">
          <span className="font-mono text-xs uppercase tracking-[0.6em] text-accent">
            {"//"} Nossos Pilares
          </span>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-primary">
            Um percurso orientado pela alma.
          </h2>
        </div>
        {services.map((service, index) => (
          <MobileCard key={service.id} item={service} index={index} />
        ))}
      </div>

      {/* Desktop */}
      <div className="hidden h-[300vh] md:block">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="z-20 flex h-full w-[40%] flex-col justify-center bg-background/95 pl-14 pr-10">
            <span className="font-mono text-xs uppercase tracking-[0.6em] text-accent">
              {"//"} Nossos Pilares
            </span>
            <h2 className="mt-6 font-serif text-6xl leading-snug text-primary">
              Um percurso orientado pela alma, pela mente e pelas raízes.
            </h2>
          </div>

          <div
            ref={rightRef}
            className="relative flex h-full w-[60%] items-center overflow-hidden"
          >
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F9F9F7] to-transparent z-10" />
            <motion.div
              ref={trackRef}
              style={{ x: smoothX }}
              className="flex w-max gap-12 pl-16 pr-40"
            >
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={cn(
                    "flex h-[600px] w-[620px] flex-shrink-0 flex-col justify-between rounded-[3rem] p-16 shadow-[0_50px_120px_rgba(0,0,0,0.08)]",
                    service.color,
                    service.border && "border border-primary/10"
                  )}
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-sm text-primary/60">
                      0{index + 1}
                    </span>
                    <service.icon className="h-20 w-20 text-primary/15" />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.6em] text-primary/70">
                      {service.subtitle}
                    </p>
                    <h3 className="mt-4 font-serif text-5xl text-primary">
                      {service.title}
                    </h3>
                    <p className="mt-6 max-w-sm font-sans text-xl text-foreground/80">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

