import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";

type ProduitHero = {
  titre: string;
  auteur: string;
  description: string;
  prixCentimes: number;
  image: string;
};

function resoudreImageHero(image: string) {
  const fallback = "/piece_4.jpg";
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

export default function HeroUne({ produit }: { produit: ProduitHero }) {
  const [titrePrincipal, ...titreSuite] = produit.titre.split(" - ");
  const sousTitre = titreSuite.join(" - ");
  const image = resoudreImageHero(produit.image);

  return (
    <header className="relative h-svh overflow-hidden bg-[#dddee2] px-1 lg:px-[0.46296vw]">
      <figure className="absolute right-0 bottom-0 z-0 aspect-[1244/1045] max-h-full w-[71.99074vw] mix-blend-darken">
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
        className="absolute bottom-0 left-0 z-10 h-[67%] w-[97.94872vw] bg-[#4cc9f0] mix-blend-multiply"
      />

      <div className="absolute bottom-0 left-0 z-20 flex h-[67%] w-[97.94872vw] flex-col items-start gap-6 p-4 text-[#f8f8f8] lg:gap-8">
        <div className="">
          <h1 className="mt-3 text-[clamp(2.25rem,10vw,8rem)] leading-[0.9] font-bold uppercase">
            <span className="block">{titrePrincipal}</span>
            {sousTitre && <span className="block">{sousTitre}</span>}
          </h1>
        </div>

        <p className="max-w-xl text-sm leading-relaxed text-[#f8f8f8]/90 sm:text-base lg:text-lg">
          {produit.description}
        </p>
      </div>
    </header>
  );
}
