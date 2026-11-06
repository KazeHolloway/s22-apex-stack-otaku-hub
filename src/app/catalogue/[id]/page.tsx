import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { notFound } from "next/navigation";
import { getProduitParId } from "@/lib/produits";
import AddToCartButton from "@/components/AddToCartButton";

// ISR : la page est régénérée en arrière-plan au plus toutes les 60 secondes
export const revalidate = 60;

type Props = { params: Promise<{ id: string }> };

// Le prix est stocké en centimes
function formaterPrix(centimes: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XAF",
  }).format(centimes);
}

export default async function ProduitPage({ params }: Props) {
  const { id } = await params;
  const produit = await getProduitParId(id);

  if (!produit) notFound();

  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-[0.46296vw] lg:py-28">
        <Link
          href="/catalogue"
          className="font-mono text-[0.68rem] uppercase tracking-[0.25em] text-black/55 transition-colors hover:text-black"
        >
          ← Catalogue
        </Link>

        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,0.9fr)_1.1fr] lg:gap-[6vw]">
          <div className="relative aspect-[2/3] w-full overflow-hidden border border-black/10 bg-[#f8f8f8]">
            <Image
              src={produit.image}
              alt={`Couverture de ${produit.titre}`}
              fill
              priority
              sizes="(min-width: 968px) 45vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-[clamp(2.5rem,7vw,2rem)] leading-[0.85] font-bold uppercase tracking-[-0.04em]">
              {produit.titre}
            </h1>

            <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.25em] text-black/55">
              {produit.auteur}
            </p>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-black/65">
              {produit.description}
            </p>

            <p className="mt-10 border-t border-black/10 pt-6 text-2xl font-bold text-black">
              {formaterPrix(produit.prixCentimes)}
            </p>

            <AddToCartButton productId={produit.id} />
          </div>
        </div>
      </section>
    </ViewTransition>
  );
}
