import { asc, eq } from "drizzle-orm";
import { db } from "./db";
import { produits } from "./db/schema";
import { estUuid } from "./uuid";

// Type d'un manga lu dans la base
export type Produit = typeof produits.$inferSelect;

// Liste de tous les mangas, triés par titre
export async function getProduits(): Promise<Produit[]> {
  const lignes = await db.select().from(produits).orderBy(asc(produits.titre));
  return lignes;
}

// Détail d'un manga, ou null s'il n'existe pas
export async function getProduitParId(id: string): Promise<Produit | null> {
  if (!estUuid(id)) return null;
  const lignes = await db.select().from(produits).where(eq(produits.id, id)).limit(1);
  return lignes[0] ?? null;
}