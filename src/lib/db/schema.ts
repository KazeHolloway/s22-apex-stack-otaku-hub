import { sql } from "drizzle-orm";
import {
  check,
  integer,
  pgTable,
  text,
  timestamp,
  unique,
  uuid,
} from "drizzle-orm/pg-core";

// Comptes des utilisateurs
export const utilisateurs = pgTable(
  "utilisateurs",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    email: text("email").notNull().unique(),
    nom: text("nom").notNull(),
    motDePasseHash: text("mot_de_passe_hash").notNull(),
    creeLe: timestamp("cree_le", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    // L'e-mail est toujours en minuscules pour éviter les doublons
    check("utilisateurs_email_minuscule", sql`${table.email} = lower(${table.email})`),
  ],
);

// Catalogue des mangas
export const produits = pgTable(
  "produits",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    titre: text("titre").notNull(),
    auteur: text("auteur").notNull(),
    description: text("description").notNull(),
    // Prix en centimes pour éviter les erreurs d'arrondi
    prixCentimes: integer("prix_centimes").notNull(),
    image: text("image").notNull(),
    creeLe: timestamp("cree_le", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    // Un prix ne peut jamais être négatif
    check("produits_prix_positif", sql`${table.prixCentimes} >= 0`),
  ],
);

// Articles du panier de chaque utilisateur
export const panierArticles = pgTable(
  "panier_articles",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    // Le panier disparaît avec son utilisateur
    utilisateurId: uuid("utilisateur_id")
      .notNull()
      .references(() => utilisateurs.id, { onDelete: "cascade" }),
    // Un produit présent dans un panier ne peut pas être supprimé
    produitId: uuid("produit_id")
      .notNull()
      .references(() => produits.id, { onDelete: "restrict" }),
    quantite: integer("quantite").notNull().default(1),
    ajouteLe: timestamp("ajoute_le", { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    // Un même produit n'apparaît qu'une fois par panier
    unique("panier_utilisateur_produit_unique").on(table.utilisateurId, table.produitId),
    // La quantité reste raisonnable
    check("panier_quantite_valide", sql`${table.quantite} BETWEEN 1 AND 99`),
  ],
);