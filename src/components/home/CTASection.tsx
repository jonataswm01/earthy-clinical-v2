"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

export default function CTASection() {
  return (
    <section className="px-6 py-24 md:px-10">
      <div className="flex min-h-[500px] w-full flex-col overflow-hidden rounded-[3rem] bg-[#F5F2EB] md:flex-row">
        <div className="flex w-full flex-col justify-center gap-6 p-12 md:w-1/2 md:p-16">
          <span className="font-mono text-xs uppercase tracking-[0.5em] text-primary/50">
            {"//"} Convite
          </span>
          <h2 className="font-serif text-4xl leading-tight text-primary md:text-5xl">
            Pronta para iniciar sua jornada?
          </h2>
          <p className="font-sans text-lg text-foreground/70">
            Agende sua consulta e dê o primeiro passo em direção ao seu
            bem-estar. Atendimento presencial em Santa Adélia e online para todo
            o Brasil.
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Agendar Sessão
            </Link>
            <Link
              href="https://maps.app.goo.gl/xKVB2iZc8F3mM1wj9"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 text-base font-semibold text-primary transition hover:text-accent"
            >
              <MapPin className="h-5 w-5" />
              Ver no Maps
            </Link>
          </div>
        </div>

        <div className="relative h-80 w-full flex-1 md:h-auto">
          <Image
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80"
            alt="Profissional acolhedora pronta para receber novas pacientes"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}


