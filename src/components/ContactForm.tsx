"use client";

import { useState, type FormEvent } from "react";

const SUJETS = [
  "Question sur un produit",
  "Suivi de commande",
  "Retour ou échange",
  "Partenariat",
  "Autre",
];

type Champs = {
  nom: string;
  email: string;
  sujet: string;
  message: string;
  consentement: boolean;
};

type Erreurs = Partial<Record<keyof Champs, string>>;
type Statut = "idle" | "envoi" | "succes" | "erreur";

const CHAMPS_INITIAUX: Champs = {
  nom: "",
  email: "",
  sujet: "",
  message: "",
  consentement: false,
};

const emailValide = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);

function valider(champs: Champs): Erreurs {
  const erreurs: Erreurs = {};

  if (champs.nom.trim().length < 2) {
    erreurs.nom = "Indique ton nom (2 caractères minimum).";
  }
  if (!emailValide(champs.email.trim())) {
    erreurs.email = "Indique une adresse e-mail valide.";
  }
  if (!champs.sujet) {
    erreurs.sujet = "Choisis un sujet.";
  }
  if (champs.message.trim().length < 10) {
    erreurs.message = "Ton message doit contenir au moins 10 caractères.";
  }
  if (!champs.consentement) {
    erreurs.consentement = "Tu dois accepter l'utilisation de tes informations.";
  }

  return erreurs;
}

const ArrowUpRight = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

const champBase =
  "w-full border-0 border-b bg-transparent px-0 py-3 text-base text-black outline-none transition-colors placeholder:text-black/35 focus:border-[#4cc9f0]";

const labelBase =
  "block font-mono text-[0.68rem] uppercase tracking-[0.25em] text-black/55";

export default function ContactForm() {
  const [champs, setChamps] = useState<Champs>(CHAMPS_INITIAUX);
  const [erreurs, setErreurs] = useState<Erreurs>({});
  const [statut, setStatut] = useState<Statut>("idle");

  function majChamp<K extends keyof Champs>(nom: K, valeur: Champs[K]) {
    setChamps((actuel) => ({ ...actuel, [nom]: valeur }));
    setErreurs((actuel) => ({ ...actuel, [nom]: undefined }));
    if (statut === "erreur") {
      setStatut("idle");
    }
  }

  async function envoyer(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const prochainesErreurs = valider(champs);
    if (Object.keys(prochainesErreurs).length > 0) {
      setErreurs(prochainesErreurs);
      return;
    }

    setStatut("envoi");

    try {
      const reponse = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(champs),
      });

      if (!reponse.ok) {
        throw new Error("Envoi impossible");
      }

      setChamps(CHAMPS_INITIAUX);
      setErreurs({});
      setStatut("succes");
    } catch {
      setStatut("erreur");
    }
  }

  if (statut === "succes") {
    return (
      <div className="flex flex-col justify-between border border-black/15 bg-[#f8f8f8] p-6 sm:p-8 lg:p-10">
        <div>
          <div className="flex items-center justify-between gap-4 font-mono text-[0.68rem] uppercase tracking-[0.25em] text-black/50">
            <span>/ Formulaire</span>
            <span>[ Envoyé ]</span>
          </div>

          <h3 className="mt-16 text-[clamp(2.5rem,5vw,4rem)] leading-[0.85] font-bold uppercase">
            Merci !
          </h3>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-black/65">
            Ton message a bien été reçu. Notre équipe te répondra sous 48 heures
            ouvrées.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setStatut("idle")}
          className="mt-16 inline-flex w-fit items-center gap-3 border-b border-black/30 pb-2 text-sm font-semibold uppercase tracking-[0.15em] transition-colors hover:border-black"
        >
          Écrire un autre message
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="border border-black/15 bg-[#f8f8f8] p-6 sm:p-8 lg:p-10">
      <div className="flex items-center justify-between gap-4 font-mono text-[0.68rem] uppercase tracking-[0.25em] text-black/50">
        <span>/ Formulaire</span>
        <span>[ 01 ]</span>
      </div>

      <form onSubmit={envoyer} noValidate className="mt-10 grid gap-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <label htmlFor="nom" className={labelBase}>
              Nom
            </label>
            <input
              id="nom"
              name="nom"
              type="text"
              autoComplete="name"
              value={champs.nom}
              onChange={(event) => majChamp("nom", event.target.value)}
              placeholder="Ton nom"
              aria-invalid={Boolean(erreurs.nom)}
              aria-describedby={erreurs.nom ? "nom-erreur" : undefined}
              className={`${champBase} ${erreurs.nom ? "border-red-600" : "border-black/25"}`}
            />
            {erreurs.nom ? (
              <p id="nom-erreur" className="mt-2 text-xs text-red-600">
                {erreurs.nom}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="email" className={labelBase}>
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={champs.email}
              onChange={(event) => majChamp("email", event.target.value)}
              placeholder="toi@exemple.com"
              aria-invalid={Boolean(erreurs.email)}
              aria-describedby={erreurs.email ? "email-erreur" : undefined}
              className={`${champBase} ${erreurs.email ? "border-red-600" : "border-black/25"}`}
            />
            {erreurs.email ? (
              <p id="email-erreur" className="mt-2 text-xs text-red-600">
                {erreurs.email}
              </p>
            ) : null}
          </div>
        </div>

        <div>
          <label htmlFor="sujet" className={labelBase}>
            Sujet
          </label>
          <select
            id="sujet"
            name="sujet"
            value={champs.sujet}
            onChange={(event) => majChamp("sujet", event.target.value)}
            aria-invalid={Boolean(erreurs.sujet)}
            aria-describedby={erreurs.sujet ? "sujet-erreur" : undefined}
            className={`${champBase} ${erreurs.sujet ? "border-red-600" : "border-black/25"}`}
          >
            <option value="" disabled>
              Choisir un sujet
            </option>
            {SUJETS.map((sujet) => (
              <option key={sujet} value={sujet}>
                {sujet}
              </option>
            ))}
          </select>
          {erreurs.sujet ? (
            <p id="sujet-erreur" className="mt-2 text-xs text-red-600">
              {erreurs.sujet}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="message" className={labelBase}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={champs.message}
            onChange={(event) => majChamp("message", event.target.value)}
            placeholder="Décris ta demande en quelques lignes…"
            aria-invalid={Boolean(erreurs.message)}
            aria-describedby={erreurs.message ? "message-erreur" : undefined}
            className={`${champBase} resize-none ${erreurs.message ? "border-red-600" : "border-black/25"}`}
          />
          {erreurs.message ? (
            <p id="message-erreur" className="mt-2 text-xs text-red-600">
              {erreurs.message}
            </p>
          ) : null}
        </div>

        <div>
          <label className="flex items-start gap-3 text-sm leading-relaxed text-black/70">
            <input
              type="checkbox"
              checked={champs.consentement}
              onChange={(event) =>
                majChamp("consentement", event.target.checked)
              }
              aria-invalid={Boolean(erreurs.consentement)}
              aria-describedby={
                erreurs.consentement ? "consentement-erreur" : undefined
              }
              className="mt-0.5 h-4 w-4 shrink-0 accent-[#4cc9f0]"
            />
            <span>
              J&apos;accepte que mes informations soient utilisées pour répondre
              à ma demande.
            </span>
          </label>
          {erreurs.consentement ? (
            <p id="consentement-erreur" className="mt-2 text-xs text-red-600">
              {erreurs.consentement}
            </p>
          ) : null}
        </div>

        <div className="grid gap-3">
          <button
            type="submit"
            disabled={statut === "envoi"}
            className="group inline-flex w-full items-center justify-between gap-4 bg-black px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#4cc9f0] hover:text-black disabled:cursor-wait disabled:opacity-60"
          >
            {statut === "envoi" ? "Envoi en cours…" : "Envoyer le message"}
            <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <p role="status" aria-live="polite" className="min-h-5 text-sm">
            {statut === "erreur" ? (
              <span className="text-red-600">
                L&apos;envoi a échoué. Réessaie dans un instant.
              </span>
            ) : null}
          </p>
        </div>
      </form>
    </div>
  );
}
