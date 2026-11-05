import type { Metadata } from "next";
import Link from "next/link";
import FlowingMenu, { type FlowingMenuItem } from "@/components/FlowingMenu";
import InfoPageHero from "@/components/InfoPageHero";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "À propos · Otaku Hub",
  description:
    "Découvrez Otaku Hub, la boutique de démonstration S22 d'Akieni Academy : catalogue de mangas, fiches produits et panier, sans paiement en ligne.",
};

const EQUIPE = [
  {
    nom: "MASSAMBA BOUESSO Christophe Darly",
    pseudo: "Kaze",
    role: "Déploiement, admin repo",
    label: "Christophe",
  },
  {
    nom: "MBOUSSA Emmanuelito",
    pseudo: "—",
    role: "À définir",
    label: "Emmanuelito",
  },
  {
    nom: "OKANIA Patience Théo",
    pseudo: "—",
    role: "À définir",
    label: "Patience",
  },
  {
    nom: "MOUKOUANGA TOMBET Brissam Josué",
    pseudo: "—",
    role: "À définir",
    label: "Brissam",
  },
  {
    nom: "NDENDE Christ",
    pseudo: "—",
    role: "À définir",
    label: "Christ",
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
    <>
      <InfoPageHero
        title="À propos"
        intro="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look"
      />

      <div className="bg-white text-black">
        <section className="px-4 pt-16 sm:px-6 lg:px-[0.46296vw] lg:pt-24">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="mt-4 text-[clamp(2.25rem,5vw,4rem)] leading-[0.9] font-bold uppercase">
                Apex Stack
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
    </>
  );
}
