"use client";

import { useState, useTransition } from "react";
import { ajouterArticle, type ResultatPanier } from "@/lib/actions/panier";

export default function AddToCartButton({
  productId,
}: {
  productId: string;
}) {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<ResultatPanier | null>(null);

  function addToCart() {
    startTransition(async () => {
      setResult(await ajouterArticle(productId));
    });
  }

  return (
    <div className="mt-8">
      <button
        type="button"
        onClick={addToCart}
        disabled={isPending}
        className="w-full bg-black px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#4cc9f0] hover:text-black disabled:cursor-wait disabled:opacity-60"
      >
        {isPending ? "Ajout..." : "Ajouter au panier"}
      </button>
      <p
        aria-live="polite"
        className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.25em] text-black/55"
      >
        {result?.message}
      </p>
    </div>
  );
}
