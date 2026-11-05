"use client";

import { useState, useTransition } from "react";
import { ajouterArticle, type ResultatPanier } from "@/lib/actions/panier";

export default function BoutonAjouterAuPanier({
  produitId,
}: {
  produitId: string;
}) {
  const [enCours, startTransition] = useTransition();
  const [resultat, setResultat] = useState<ResultatPanier | null>(null);

  function ajouter() {
    startTransition(async () => {
      // Si l'utilisateur n'est pas connecté, l'action redirige vers /connexion
      setResultat(await ajouterArticle(produitId));
    });
  }

  return (
    <div className="mt-6">
      <button
        type="button"
        onClick={ajouter}
        disabled={enCours}
        className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {enCours ? "Ajout en cours..." : "Ajouter au panier"}
      </button>
      <p aria-live="polite" className="mt-2 text-sm">
        {resultat?.message}
      </p>
    </div>
  );
}
