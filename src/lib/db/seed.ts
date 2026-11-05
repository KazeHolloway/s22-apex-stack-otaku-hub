import bcrypt from "bcryptjs";
import { CATALOGUE } from "../catalogue";
import { db } from "./index";
import { produits, utilisateurs } from "./schema";

async function main() {
  // Compte de démonstration (ignoré s'il existe déjà)
  const motDePasseHash = await bcrypt.hash("Demo1234!", 10);
  await db
    .insert(utilisateurs)
    .values({
      email: "demo@otaku-hub.test",
      nom: "Utilisateur Démo",
      motDePasseHash,
    })
    .onConflictDoNothing();

  // Les mangas sont ajoutés seulement si le catalogue est vide
  const existants = await db
    .select({ id: produits.id })
    .from(produits)
    .limit(1);
  if (existants.length === 0) {
    await db.insert(produits).values(CATALOGUE);
  }

  console.log("Données de test prêtes");
}

main().catch((erreur) => {
  console.error(erreur);
  process.exit(1);
});
