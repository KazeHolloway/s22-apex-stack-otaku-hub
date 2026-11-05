import { ViewTransition } from "react";
import { PRODUIT_UNE } from "@/lib/catalogue";
import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";
import Image from "next/image";

import { existsSync } from "node:fs";
import path from "node:path";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact · Otaku Hub",
  description:
    "Une question sur un manga, une commande ou un retour ? Contacte l'équipe Otaku Hub avec le formulaire de contact.",
};

function resoudreImageHero(image: string) {
  const fallback = "/hero_1.jpg";
  if (!image) return fallback;

  try {
    const chemin = path.join(
      process.cwd(),
      "public",
      image.replace(/^\/+/, ""),
    );
    return existsSync(chemin) ? image : fallback;
  } catch {
    return fallback;
  }
}

export default function Contact() {
  const produit = PRODUIT_UNE;
  const image = resoudreImageHero(produit.image);
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <header className="relative h-svh overflow-hidden bg-[#dddee2] px-1 lg:px-[0.46296vw]">
        <figure className="absolute inset-0 z-0 max-h-full w-full mix-blend-darken">
          <Image
            src={image}
            alt={produit.titre}
            fill
            priority
            sizes="(max-width: 268px) 100vw, 72vw"
            className="object-cover"
          />
        </figure>

        <span
          aria-hidden="true"
          className="absolute bottom-0 right-0 z-10 h-[67%] w-[97.94872vw] bg-[#4cc9f0] mix-blend-multiply"
        />

        <div className="absolute bottom-0 left-8 z-20 flex h-[67%] w-[97.94872vw] flex-col items-start gap-6 p-4 text-[#f8f8f8] lg:gap-8">
          <div className="">
            <h1 className="mt-3 text-[clamp(3.5rem,10vw,8rem)] leading-[0.8] font-bold uppercase">
              Contact
            </h1>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-[#f8f8f8]/90 sm:text-lg">
            Une question sur un manga, une commande ou un retour ? Écris-nous :
            l&apos;équipe Otaku Hub te répond sous 48 heures ouvrées.
          </p>
        </div>
      </header>
      <section className="bg-[#dddee2] px-4 py-20 text-black sm:px-6 lg:px-[0.46296vw] lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-[6vw]">
          <div>
            <h2 className="mt-10 text-[clamp(3rem,8vw,7rem)] leading-[0.8] font-bold uppercase tracking-[-0.04em]">
              Parlons manga.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-black/65">
              Une question sur un titre, une commande ou un retour ? Remplis le
              formulaire et notre équipe te répond sous 48 heures ouvrées.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </ViewTransition>
  );
}
