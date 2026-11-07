import Link from "next/link";
import Image from "next/image";
import { ViewTransition } from "react";
import { getProduits } from "@/lib/produits";

export const revalidate = 60;

function formaterPrix(centimes: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XAF",
  }).format(centimes);
}
export default async function CataloguePage() {
  const produits = await getProduits();

  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <section className="mx-auto max-w-7xl p-6 pt-40">
        <h1 className="my-5 text-[clamp(3.5rem,11vw,9rem)] leading-[0.82] font-bold uppercase">
          Catalogue
        </h1>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {produits.map((produit) => (
            <Link key={produit.id} href={`/catalogue/${produit.id}`}>
              <article className="border rounded overflow-hidden bg-white hover:shadow-lg transition-shadow">
                <div className="relative w-full aspect-[4/4] bg-gray-100">
                  <Image
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    src={produit.image}
                    alt={`Couverture de ${produit.titre}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-3xl font-semibold uppercase">
                    {produit.titre}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1">{produit.auteur}</p>
                  <p className="text-sm mt-2 line-clamp-2">
                    {produit.description}
                  </p>
                  <p className="mt-3 text-lg font-semibold">
                    {formaterPrix(produit.prixCentimes)}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </ViewTransition>
  );
}
