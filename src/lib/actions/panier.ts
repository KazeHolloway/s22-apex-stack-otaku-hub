"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { estUuid } from "@/lib/uuid";
import { ajouterAuPanier, retirerDuPanier } from "@/lib/panier";

// Résultat renvoyé aux composants pour afficher un message
export type ResultatPanier = { ok: boolean; message: string };

// Récupère l'identifiant de l'utilisateur connecté, sinon redirige vers la connexion
async function getUtilisateurIdConnecte(): Promise<string> {
  const session = await auth();
  const utilisateurId = session?.user?.id;
  if (!utilisateurId) redirect("/connexion");
  return utilisateurId;
}

// Ajoute un manga au panier de l'utilisateur connecté
export async function ajouterArticle(produitId: string): Promise<ResultatPanier> {
  const utilisateurId = await getUtilisateurIdConnecte();

  // Refus des identifiants invalides avant d'interroger la base
  if (!estUuid(produitId)) {
    return { ok: false, message: "Manga introuvable." };
  }

  const ajoute = await ajouterAuPanier(utilisateurId, produitId);
  if (!ajoute) {
    return { ok: false, message: "Manga introuvable." };
  }

  // Met à jour la page panier, rendue côté serveur
  revalidatePath("/panier");
  return { ok: true, message: "Manga ajouté au panier." };
}

// Retire un manga du panier de l'utilisateur connecté
export async function retirerArticle(produitId: string): Promise<ResultatPanier> {
  const utilisateurId = await getUtilisateurIdConnecte();

  if (!estUuid(produitId)) {
    return { ok: false, message: "Manga introuvable." };
  }

  await retirerDuPanier(utilisateurId, produitId);

  revalidatePath("/panier");
  return { ok: true, message: "Manga retiré du panier." };
}