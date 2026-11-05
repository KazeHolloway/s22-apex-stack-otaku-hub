import { sql } from "drizzle-orm";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

// Route toujours exécutée à chaque appel, jamais mise en cache
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    // Requête minimale pour vérifier que la base Neon répond
    await db.execute(sql`select 1`);
    return NextResponse.json({
      status: "OK",
      message: "Le serveur et la base de données fonctionnent à merveille 🎉",
    });
  } catch {
    // Code 503 si la base ne répond pas
    return NextResponse.json(
      { status: "ERROR", message: "La base de données ne répond pas" },
      { status: 503 },
    );
  }
}