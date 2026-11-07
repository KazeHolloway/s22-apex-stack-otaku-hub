"use server";

import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { creerUtilisateur } from "@/lib/utilisateurs";

export type EtatInscription = {
  erreur?: string;
  nom?: string;
  email?: string;
};

export async function inscrire(
  _etat: EtatInscription,
  formData: FormData,
): Promise<EtatInscription> {
  const nom = String(formData.get("nom") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const motDePasse = String(formData.get("password") ?? "");

  // On renvoie nom et e-mail pour ne pas vider le formulaire en cas d'erreur
  if (!nom || !email || !motDePasse) {
    return { erreur: "Tous les champs sont obligatoires.", nom, email };
  }
  if (motDePasse.length < 8) {
    return {
      erreur: "Le mot de passe doit contenir au moins 8 caractères.",
      nom,
      email,
    };
  }

  // Le mot de passe n'est jamais stocké en clair
  const motDePasseHash = await bcrypt.hash(motDePasse, 10);

  const utilisateur = await creerUtilisateur({ email, nom, motDePasseHash });
  if (!utilisateur) {
    return { erreur: "Un compte existe déjà avec cet e-mail.", nom, email };
  }

  // Compte créé : on connecte directement l'utilisateur
  try {
    await signIn("credentials", { email, password: motDePasse, redirectTo: "/" });
  } catch (erreur) {
    if (erreur instanceof AuthError) {
      // Le compte existe mais la connexion automatique a échoué
      redirect("/connexion");
    }
    // Les redirections de Next.js doivent être relancées
    throw erreur;
  }
  return {};
}