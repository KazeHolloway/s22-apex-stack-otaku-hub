import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

// Connexion HTTP à Neon, adaptée à Vercel
const sql = neon(process.env.DATABASE_URL!);

// Objet unique utilisé partout pour interroger la base
export const db = drizzle({ client: sql, schema });