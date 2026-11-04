import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// Chargement des variables d'environnement locales
config({ path: ".env.local" });

export default defineConfig({
  // Emplacement du schéma des tables
  schema: "./src/lib/db/schema.ts",
  // Dossier des fichiers SQL générés
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});