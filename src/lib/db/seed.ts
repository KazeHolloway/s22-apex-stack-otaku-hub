import bcrypt from "bcryptjs";
import { db } from "./index";
import { produits, utilisateurs } from "./schema";

// Mangas du catalogue de démonstration (prix en centimes d'euro)
const mangas = [
  { titre: "One Piece - Tome 1", auteur: "Eiichiro Oda", description: "Luffy, un jeune pirate au corps élastique, part en mer avec son équipage pour devenir le roi des pirates.", prixCentimes: 695, image: "/mangas/one-piece.jpg" },
  { titre: "Naruto - Tome 1", auteur: "Masashi Kishimoto", description: "Naruto, un jeune ninja rejeté par son village, rêve de devenir Hokage pour être reconnu de tous.", prixCentimes: 695, image: "/mangas/naruto.jpg" },
  { titre: "Dragon Ball - Tome 1", auteur: "Akira Toriyama", description: "Le jeune Son Goku part à la recherche des sept boules de cristal qui exaucent tous les vœux.", prixCentimes: 650, image: "/mangas/dragon-ball.jpg" },
  { titre: "L'Attaque des Titans - Tome 1", auteur: "Hajime Isayama", description: "L'humanité vit derrière de hauts murs pour se protéger de géants qui dévorent les humains.", prixCentimes: 690, image: "/mangas/attaque-des-titans.jpg" },
  { titre: "Death Note - Tome 1", auteur: "Tsugumi Ohba et Takeshi Obata", description: "Un lycéen trouve un carnet qui fait mourir toute personne dont il écrit le nom.", prixCentimes: 720, image: "/mangas/death-note.jpg" },
  { titre: "Fullmetal Alchemist - Tome 1", auteur: "Hiromu Arakawa", description: "Deux frères alchimistes cherchent la pierre philosophale pour retrouver leurs corps après une expérience interdite.", prixCentimes: 690, image: "/mangas/fullmetal-alchemist.jpg" },
  { titre: "Demon Slayer - Tome 1", auteur: "Koyoharu Gotouge", description: "Tanjiro devient chasseur de démons pour sauver sa petite sœur transformée en démon.", prixCentimes: 640, image: "/mangas/demon-slayer.jpg" },
  { titre: "My Hero Academia - Tome 1", auteur: "Kohei Horikoshi", description: "Dans un monde où presque tout le monde a un super-pouvoir, un garçon sans pouvoir rêve de devenir un héros.", prixCentimes: 675, image: "/mangas/my-hero-academia.jpg" },
  { titre: "Jujutsu Kaisen - Tome 1", auteur: "Gege Akutami", description: "Un lycéen avale un doigt maudit et rejoint une école d'exorcistes pour combattre des malédictions.", prixCentimes: 690, image: "/mangas/jujutsu-kaisen.jpg" },
  { titre: "Bleach - Tome 1", auteur: "Tite Kubo", description: "Ichigo, un lycéen qui voit les fantômes, devient un shinigami chargé de protéger les vivants.", prixCentimes: 695, image: "/mangas/bleach.jpg" },
  { titre: "Hunter x Hunter - Tome 1", auteur: "Yoshihiro Togashi", description: "Gon part à l'aventure pour devenir un Hunter et retrouver son père.", prixCentimes: 675, image: "/mangas/hunter-x-hunter.jpg" },
  { titre: "One-Punch Man - Tome 1", auteur: "ONE et Yusuke Murata", description: "Saitama, un héros qui bat tous ses adversaires d'un seul coup de poing, s'ennuie de ne plus avoir de défi.", prixCentimes: 695, image: "/mangas/one-punch-man.jpg" },
];

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
  const existants = await db.select({ id: produits.id }).from(produits).limit(1);
  if (existants.length === 0) {
    await db.insert(produits).values(mangas);
  }

  console.log("Données de test prêtes");
}

main().catch((erreur) => {
  console.error(erreur);
  process.exit(1);
});