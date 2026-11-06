import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const NAVIGATION = [
  { label: "Accueil", href: "/" },
  { label: "Catalogue", href: "/catalogue" },
  { label: "Panier", href: "/panier" },
  { label: "Profil", href: "/profil" },
  { label: "Connexion", href: "/connexion" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

const LIENS_EXTERNES = [
  {
    label: "Dépôt GitHub",
    href: "https://github.com/KazeHolloway/s22-apex-stack-otaku-hub",
  },
  {
    label: "Signaler un problème",
    href: "https://github.com/KazeHolloway/s22-apex-stack-otaku-hub/issues",
  },
];

const lienSouligne =
  "relative inline-block text-sm text-black/70 transition-colors hover:text-black after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-current after:transition-transform after:duration-700 hover:after:origin-left hover:after:scale-x-100";

const ArrowRight = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 19"
    aria-hidden="true"
    className={className}
  >
    <path d="m10.392 16.88 7.232-7.264-7.264-7.232 1.696-1.76 8.992 8.992-8.96 8.992zM.568 8.304h18.4v2.656H.568z" />
  </svg>
);

const TitreColonne = ({ children }: { children: ReactNode }) => (
  <h2 className="text-xs font-medium uppercase tracking-[0.25em] text-black/50">
    {children}
  </h2>
);

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#dddee2] text-black">
      <div className="px-4 pt-16 pb-6 sm:px-6 lg:px-[0.46296vw] lg:pt-24">
        <div className="flex flex-col gap-10 border-b border-black/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.svg"
              width={64}
              height={64}
              alt="Logo Otaku Hub"
              className="h-14 w-14 sm:h-16 sm:w-16"
            />
            <div>
              <p className="font-komika text-2xl uppercase leading-none sm:text-3xl">
                Otaku Hub
              </p>
              <p className="mt-2 text-sm text-black/60">
                Mangas et éditions collectors
              </p>
            </div>
          </div>

          <Link
            href="/catalogue"
            className="group inline-flex items-center gap-4 self-start lg:self-auto"
          >
            <span className="relative text-lg font-medium uppercase tracking-[0.15em] sm:text-2xl">
              Explorer le catalogue
              <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-100 bg-current transition-transform duration-700 group-hover:origin-left group-hover:scale-x-0" />
            </span>
            <span className="relative flex h-12 w-14 items-center overflow-hidden">
              <ArrowRight className="h-8 w-8 transition-transform duration-700 group-hover:translate-x-full" />
              <ArrowRight className="absolute h-8 w-8 -translate-x-full transition-transform duration-700 group-hover:translate-x-0" />
            </span>
          </Link>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <TitreColonne>Le projet</TitreColonne>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-black/70">
          Otaku Hub est une boutique en ligne de mangas et
          d&apos;éditions collectors. Un catalogue, des fiches produits et un panier.
            </p>
          </div>

          <nav aria-label="Navigation du pied de page">
            <TitreColonne>Navigation</TitreColonne>
            <ul className="mt-4 flex flex-col gap-2">
              {NAVIGATION.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={lienSouligne}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <TitreColonne>Liens</TitreColonne>
            <ul className="mt-4 flex flex-col gap-2">
              {LIENS_EXTERNES.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={lienSouligne}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-black/15 pt-6 text-xs uppercase tracking-[0.15em] text-black/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Otaku Hub · Apex Stack</p>
        </div>
      </div>
    </footer>
  );
}
