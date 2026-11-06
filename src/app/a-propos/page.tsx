import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";
import Image from "next/image";
import FlowingMenu, { type FlowingMenuItem } from "@/components/FlowingMenu";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "À propos · Otaku Hub",
  description:
    "Découvrez Otaku Hub, la boutique en ligne de mangas et d'éditions collectors : catalogue, fiches produits et panier.",
};

const EQUIPE = [
  {
    nom: "MASSAMBA BOUESSO Christophe Darly",
    pseudo: "KazeHolloway",
    role: "Déploiement, admin repo",
    label: "Christophe",
  },
  {
    nom: "MBOUSSA Emmanuelito",
    pseudo: "elyseeMB",
    role: "Rendu et performance, lead",
    label: "Emmanuelito",
  },
  {
    nom: "KOY Jude Airich",
    pseudo: "Deekskn",
    role: "Authentification",
    label: "Jude",
  },
  {
    nom: "OKANIA Patience Théo",
    pseudo: "theos1401",
    role: "Fonctionnalité 1",
    label: "Patience",
  },
  {
    nom: "MOUKOUANGA TOMBET Brissam Josué",
    pseudo: "BrissamDev",
    role: "Fonctionnalité 2",
    label: "Brissam",
  },
];

const LOGOS = [
  "/Naruto.svg",
  "/naruto_2.svg",
  "/Jujutsu_Kaisen.svg",
  "/Naruto.svg",
  "/Dragon_Ball.svg",
];

const MEMBRES: FlowingMenuItem[] = EQUIPE.map(
  ({ nom, pseudo, role, label }, index) => ({
    text: label,
    marquee: `${nom} · ${role}`,
    image: LOGOS[index],
    meta: pseudo !== "—" ? pseudo : undefined,
  }),
);

export default function APropos() {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <header className="relative h-svh overflow-hidden bg-[#dddee2] px-1 lg:px-[0.46296vw]">
        <figure className="absolute inset-0 z-0 max-h-full w-full mix-blend-darken">
          <Image
            src="/hero_7.jpg"
            alt="Illustration de l'univers Otaku Hub"
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
          <h1 className="mt-3 text-[clamp(3.5rem,10vw,8rem)] leading-[0.8] font-bold uppercase">
            À propos
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-[#f8f8f8]/90 sm:text-lg">
            Otaku Hub est un site de démonstration de vente de mangas, réalisé
            par le groupe Apex Stack pour le livrable S22 de l&apos;Akieni
            Academy. Il propose un catalogue, des fiches produits, un panier et
            un espace de connexion. Aucun paiement n&apos;est réel.
          </p>
        </div>
      </header>

      <div className="bg-white text-black">
        <section className="px-4 pt-16 sm:px-6 lg:px-[0.46296vw] lg:pt-24">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="mt-4 text-[clamp(2.25rem,5vw,4rem)] leading-[0.9] font-bold uppercase">
                Équipe Apex Stack
              </h2>
            </div>
          </div>

          <div className="mt-12 h-[clamp(380px,52vw,620px)] overflow-hidden bg-[#0b0b0b] -mx-4">
            <FlowingMenu
              items={MEMBRES}
              ariaLabel="Membres de l'équipe Apex Stack"
              speed={55}
              direction="alternate"
              followCursor={0.35}
              duration={0.55}
              stretch={0.7}
              magnet={0.2}
              textColor="#f8f8f8"
              bgColor="#0b0b0b"
              marqueeBgColor="#4cc9f0"
              marqueeTextColor="#0b0b0b"
              borderColor="rgba(248,248,248,0.18)"
              align="left"
              showIndex
              imageShape="rounded"
            />
          </div>
        </section>

        <section className="bg-[#0b0b0b] px-4 py-16 text-[#f8f8f8] sm:px-6 lg:px-[0.46296vw] lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <h2 className="max-w-2xl text-[clamp(2rem,5vw,4rem)] leading-[0.9] font-bold uppercase">
              Envie de discuter du projet ?
            </h2>
            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#4cc9f0] px-6 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-black transition-colors hover:bg-white"
              >
                Nous contacter
              </Link>
              <Link
                href="/"
                className="relative inline-block text-sm text-white/70 transition-colors hover:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-700 hover:after:origin-left hover:after:scale-x-100"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ViewTransition>
  );
}
