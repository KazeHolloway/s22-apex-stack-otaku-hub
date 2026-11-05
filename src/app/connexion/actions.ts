"use server";

import { AuthError } from "next-auth";
import { signIn } from "@/auth";

export async function connecter(
  _etat: { erreur?: string },
  formData: FormData,
): Promise<{ erreur?: string }> {
  try {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/",
    });
  } catch (erreur) {
    // Identifiants invalides : message affiché dans le formulaire
    if (erreur instanceof AuthError) {
      // Identifiants refusés : authorize a renvoyé null
      if (erreur.type === "CredentialsSignin") {
        return { erreur: "E-mail ou mot de passe incorrect." };
      }
      // Autre cause, par exemple la base de données injoignable
      return {
        erreur: "Le serveur ne répond pas pour le moment. Réessayez dans quelques secondes.",
      };
    }
    // Les redirections de Next.js doivent être relancées
    throw erreur;
  }
  return {};
}