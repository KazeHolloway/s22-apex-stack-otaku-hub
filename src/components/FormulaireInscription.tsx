"use client";

import Link from "next/link";
import { useActionState } from "react";
import { inscrire } from "@/app/inscription/actions";

const classeLabel =
  "block font-mono text-[0.68rem] uppercase tracking-[0.25em] text-black/55";
const classeChamp =
  "w-full border-0 border-b bg-transparent px-0 py-3 text-base text-black outline-none transition-colors placeholder:text-black/35 focus:border-[#4cc9f0]";

export default function FormulaireInscription() {
  const [etat, action, enCours] = useActionState(inscrire, {});

  return (
    <form
      action={action}
      className="max-w-2xl flex mx-auto flex-col gap-4 p-6 sm:p-8 lg:p-10"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="nom" className={classeLabel}>
          Nom
        </label>
        <input
          id="nom"
          name="nom"
          type="text"
          autoComplete="name"
          required
          defaultValue={etat.nom}
          className={classeChamp}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className={classeLabel}>
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue={etat.email}
          className={classeChamp}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className={classeLabel}>
          Mot de passe (8 caractères minimum)
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={8}
          required
          className={classeChamp}
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
        className="group inline-flex w-full items-center justify-center gap-4 bg-black px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#4cc9f0] hover:text-black disabled:cursor-wait disabled:opacity-60"
      >
        {enCours ? "Création du compte..." : "Créer mon compte"}
      </button>

      <p>
        Déjà un compte ?{" "}
        <Link href="/connexion" className="underline">
          Se connecter
        </Link>
      </p>
    </form>
  );
}