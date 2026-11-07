import { and, asc, eq, sql } from "drizzle-orm";
import { db } from "./db";
import { panierArticles, produits } from "./db/schema";
import { getProduitParId } from "./produits";
import { estUuid } from "./uuid";

// Une ligne du panier avec les informations du manga
export type ArticlePanier = {
  produitId: string;
  quantite: number;
  titre: string;
  auteur: string;
  prixCentimes: number;
  image: string;
};

// Contenu du panier d'un utilisateur, du plus ancien au plus récent
export async function getPanier(utilisateurId: string): Promise<ArticlePanier[]> {
  const lignes = await db
    .select({
      produitId: panierArticles.produitId,
      quantite: panierArticles.quantite,
      titre: produits.titre,
      auteur: produits.auteur,
      prixCentimes: produits.prixCentimes,
      image: produits.image,
    })
    .from(panierArticles)
    .innerJoin(produits, eq(panierArticles.produitId, produits.id))
    .where(eq(panierArticles.utilisateurId, utilisateurId))
    .orderBy(asc(panierArticles.ajouteLe));
  return lignes;
}

// Ajoute un manga au panier, ou augmente sa quantité de 1 (maximum 99)
// Renvoie false si le manga n'existe pas
export async function ajouterAuPanier(utilisateurId: string, produitId: string): Promise<boolean> {
  const produit = await getProduitParId(produitId);
  if (!produit) return false;

  await db
    .insert(panierArticles)
    .values({ utilisateurId, produitId })
    .onConflictDoUpdate({
      target: [panierArticles.utilisateurId, panierArticles.produitId],
      set: { quantite: sql`LEAST(${panierArticles.quantite} + 1, 99)` },
    });
  return true;
}

// Retire un manga du panier
export async function retirerDuPanier(utilisateurId: string, produitId: string): Promise<void> {
  if (!estUuid(produitId)) return;
  await db
    .delete(panierArticles)
    .where(and(eq(panierArticles.utilisateurId, utilisateurId), eq(panierArticles.produitId, produitId)));
}