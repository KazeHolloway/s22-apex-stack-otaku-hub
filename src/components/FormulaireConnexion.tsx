"use client";

import Link from "next/link";
import { useActionState } from "react";
import { connecter } from "@/app/connexion/actions";

export default function FormulaireConnexion() {
  const [etat, action, enCours] = useActionState(connecter, {});

  return (
    <form action={action} className="mx-auto flex max-w-sm flex-col gap-4 p-6">
      <h1 className="text-2xl font-bold">Connexion</h1>

      <div className="flex flex-col gap-1">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="rounded border border-gray-400 p-2"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="rounded border border-gray-400 p-2"
        />
      </div>

      {/* Message d'erreur annoncé aux lecteurs d'écran */}
      {etat.erreur && (
        <p role="alert" className="text-red-700">
          {etat.erreur}
        </p>
      )}

      <button
        type="submit"
        disabled={enCours}
        className="rounded bg-black p-2 text-white disabled:opacity-60"
      >
        {enCours ? "Connexion..." : "Se connecter"}
      </button>

      <p>
        Pas encore de compte ?{" "}
        <Link href="/inscription" className="underline">
          Créer un compte
        </Link>
      </p>
    </form>
  );
}