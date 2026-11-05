
import Image from "next/image";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { getPanier } from "@/lib/panier";
import { retirerArticle } from "@/lib/actions/panier";

export const metadata = {
  title: "Mon panier | Otaku Hub",
  description: "Consultez et gérez votre panier Otaku Hub.",
};

function formaterPrix(prixCentimes: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(prixCentimes / 100);
}

export default async function PanierPage() {
  // 1. Récupérer la session de l'utilisateur
  const session = await auth();
  const utilisateurId = session?.user?.id;

  // 2. Rediriger les visiteurs non connectés
  if (!utilisateurId) {
    redirect("/connexion");
  }

  // 3. Récupérer les articles du panier
  const articles = await getPanier(utilisateurId);

  // 4. Calculer le montant total
  const totalCentimes = articles.reduce(
    (total, article) => total + article.prixCentimes * article.quantite,
    0
  );

  // 5. Afficher la page
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-600">
          Otaku Hub
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          Mon panier
        </h1>

        <p className="mt-2 text-gray-600">
          Retrouvez les mangas que vous souhaitez acheter.
        </p>
      </header>

      {articles.length === 0 ? (
        // PANIER VIDE
        <section className="rounded-xl border border-gray-200 bg-white p-10 text-center">
          <h2 className="text-xl font-semibold text-gray-900">
            Votre panier est vide
          </h2>

          <p className="mt-3 text-gray-600">
            Découvrez notre catalogue et ajoutez vos mangas préférés.
          </p>
        </section>
      ) : (
        // PANIER AVEC ARTICLES
        <div className="grid gap-8 md:grid-cols-[1fr_320px]">
          <section className="space-y-4">
            {articles.map((article) => (
              <article
                key={article.produitId}
                className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4"
              >
                <Image
                  src={article.image}
                  alt={article.titre}
                  width={96}
                  height={128}
                  unoptimized
                  className="h-32 w-24 rounded-lg object-cover"
                />

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {article.titre}
                    </h2>

                    <p className="text-sm text-gray-500">
                      {article.auteur}
                    </p>

                    <p className="mt-2 text-sm text-gray-600">
                      Quantité : {article.quantite}
                    </p>
                  </div>

                  <p className="font-semibold text-gray-900">
                    {formaterPrix(
                      article.prixCentimes * article.quantite
                    )}
                  </p>
                </div>

                {/* ACTION DE SUPPRESSION */}
                <form
                  action={async () => {
                    "use server";
                    await retirerArticle(article.produitId);
                  }}
                >
                  <button
                    type="submit"
                    className="text-sm font-medium text-red-600 transition hover:text-red-800"
                  >
                    Retirer
                  </button>
                </form>
              </article>
            ))}
          </section>

          {/* RÉCAPITULATIF DU PANIER */}
          <aside className="h-fit rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-bold text-gray-900">
              Récapitulatif
            </h2>

            <p className="mt-4 text-gray-600">
              Nombre d&apos;articles :{" "}
              {articles.reduce(
                (total, article) => total + article.quantite,
                0
              )}
            </p>

            <div className="mt-4 flex justify-between border-t border-gray-200 pt-4">
              <span className="font-semibold text-gray-900">
                Total
              </span>

              <span className="font-bold text-gray-900">
                {formaterPrix(totalCentimes)}
              </span>
            </div>

            <button
              type="button"
              disabled
              className="mt-6 w-full cursor-not-allowed rounded-lg bg-gray-300 px-5 py-3 font-semibold text-gray-600"
            >
              Commander prochainement
            </button>
          </aside>
        </div>
      )}
    </main>
  );
}
