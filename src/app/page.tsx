import { ViewTransition } from "react";
import HeroUne from "@/components/HeroUne";
import { PRODUIT_UNE } from "@/lib/catalogue";
import { getProduitUne } from "@/lib/produits";

export default async function Home() {
  const produit = (await getProduitUne()) ?? PRODUIT_UNE;

  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <HeroUne produit={produit} />
    </ViewTransition>
  );
}
