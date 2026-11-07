import { NextResponse } from "next/server";

const SUJETS = new Set([
  "Question sur un produit",
  "Suivi de commande",
  "Retour ou échange",
  "Partenariat",
  "Autre",
]);

type MessageContact = {
  nom?: unknown;
  email?: unknown;
  sujet?: unknown;
  message?: unknown;
  consentement?: unknown;
};

const texte = (valeur: unknown) =>
  typeof valeur === "string" ? valeur.trim() : "";

export async function POST(request: Request) {
  let charge: MessageContact;

  try {
    charge = (await request.json()) as MessageContact;
  } catch {
    return NextResponse.json(
      { erreur: "Requête invalide." },
      { status: 400 },
    );
  }

  const nom = texte(charge.nom);
  const email = texte(charge.email);
  const sujet = texte(charge.sujet);
  const message = texte(charge.message);
  const consentement = charge.consentement === true;

  if (nom.length < 2) {
    return NextResponse.json(
      { erreur: "Le nom est requis." },
      { status: 400 },
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json(
      { erreur: "L'adresse e-mail est invalide." },
      { status: 400 },
    );
  }
  if (!SUJETS.has(sujet)) {
    return NextResponse.json(
      { erreur: "Le sujet est invalide." },
      { status: 400 },
    );
  }
  if (message.length < 10) {
    return NextResponse.json(
      { erreur: "Le message est trop court." },
      { status: 400 },
    );
  }
  if (!consentement) {
    return NextResponse.json(
      { erreur: "Le consentement est requis." },
      { status: 400 },
    );
  }

  console.info(`[contact] Nouveau message reçu — sujet : ${sujet}`);

  return NextResponse.json({ ok: true });
}
