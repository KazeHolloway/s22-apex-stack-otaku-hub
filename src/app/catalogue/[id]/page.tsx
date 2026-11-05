import Image from "next/image";
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
    currency: "EUR",
  }).format(centimes / 100);
}

export default async function ProduitPage({ params }: Props) {
  const { id } = await params;
  const produit = await getProduitParId(id);

  if (!produit) notFound();

  return (
    <section className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2 p-6 pt-40">
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded">
        <Image
          src={"/hero_1.jpg"}
          alt={`Couverture de ${produit.titre}`}
          fill
          priority
          sizes="(min-width: 968px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div>
        <h1 className="text-2xl font-bold">{produit.titre}</h1>
        <p className="mt-1 text-sm text-gray-600">{produit.auteur}</p>
        <p className="mt-4">{produit.description}</p>
        <p className="mt-4 text-lg font-semibold">
          {formaterPrix(produit.prixCentimes)}
        </p>

        <AddToCartButton productId={produit.id} />
      </div>
    </section>
  );
}
