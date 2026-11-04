import { eq } from "drizzle-orm";
import { db } from "./db";
import { utilisateurs } from "./db/schema";

// Type d'un utilisateur lu dans la base
export type Utilisateur = typeof utilisateurs.$inferSelect;

// Cherche un utilisateur par e-mail, ou null s'il n'existe pas
export async function getUtilisateurParEmail(email: string): Promise<Utilisateur | null> {
  const lignes = await db
    .select()
    .from(utilisateurs)
    .where(eq(utilisateurs.email, email.trim().toLowerCase()))
    .limit(1);
  return lignes[0] ?? null;
}

// Crée un compte, ou renvoie null si l'e-mail existe déjà
// Le mot de passe doit être déjà haché avec bcryptjs
export async function creerUtilisateur(donnees: {
  email: string;
  nom: string;
  motDePasseHash: string;
}): Promise<Utilisateur | null> {
  const lignes = await db
    .insert(utilisateurs)
    .values({ ...donnees, email: donnees.email.trim().toLowerCase() })
    .onConflictDoNothing()
    .returning();
  return lignes[0] ?? null;
}