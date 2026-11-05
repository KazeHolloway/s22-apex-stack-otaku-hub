import HeroUne from "@/components/HeroUne";
import { PRODUIT_UNE } from "@/lib/catalogue";
import { getProduitUne } from "@/lib/produits";

export default async function Home() {
  const produit = (await getProduitUne()) ?? PRODUIT_UNE;

  return <HeroUne produit={produit} />;
}
