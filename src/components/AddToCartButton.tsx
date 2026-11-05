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
    <div className="mt-6">
      <button
        type="button"
        onClick={addToCart}
        disabled={isPending}
        className="rounded bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        {isPending ? "Adding..." : "Add to cart"}
      </button>
      <p aria-live="polite" className="mt-2 text-sm">
        {result?.message}
      </p>
    </div>
  );
}
