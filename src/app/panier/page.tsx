import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { getPanier } from "@/lib/panier";
import { retirerArticle } from "@/lib/actions/panier";

export const metadata = {
  title: "Mon panier | Otaku Hub",
  description: "Consultez et gérez votre panier Otaku Hub.",
};

function formaterPrix(centimes: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "XAF",
  }).format(centimes);
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
    0,
  );

  // 5. Afficher la page
  return (
    <section className="mx-auto w-full max-w-5xl flex-1 px-4 py-16 sm:px-6 lg:px-[0.46296vw] lg:py-28">
      <header className="mb-12">
        <h1 className="mt-3 text-[clamp(2.25rem,5vw,4rem)] leading-[0.9] font-bold uppercase">
          Mon panier
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-black/65">
          Retrouvez les mangas que vous souhaitez acheter.
        </p>
      </header>

      {articles.length === 0 ? (
        // PANIER VIDE
        <section className="border border-black/10 bg-[#f8f8f8] p-10 text-center">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-black">
            Votre panier est vide
          </h2>

          <p className="mt-3 text-base leading-relaxed text-black/65">
            Découvrez notre catalogue et ajoutez vos mangas préférés.
          </p>

          <Link
            href="/catalogue"
            className="mt-8 inline-flex items-center justify-center bg-black px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#4cc9f0] hover:text-black"
          >
            Voir le catalogue
          </Link>
        </section>
      ) : (
        // PANIER AVEC ARTICLES
        <div className="grid gap-12 md:grid-cols-[1fr_320px]">
          <section>
            {articles.map((article) => (
              <article
                key={article.produitId}
                className="flex gap-4 border-b border-black/10 py-6 first:pt-0"
              >
                <Image
                  src={article.image}
                  alt={article.titre}
                  width={96}
                  height={128}
                  unoptimized
                  className="h-32 w-24 object-cover"
                />

                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <h2 className="text-lg font-bold uppercase tracking-tight text-black">
                      {article.titre}
                    </h2>

                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.25em] text-black/55">
                      {article.auteur}
                    </p>

                    <p className="mt-3 text-sm text-black/65">
                      Quantité : {article.quantite}
                    </p>
                  </div>

                  <p className="font-semibold text-black">
                    {formaterPrix(article.prixCentimes * article.quantite)}
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
                    className="text-sm font-medium text-black/55 underline underline-offset-4 transition-colors hover:text-black"
                  >
                    Retirer
                  </button>
                </form>
              </article>
            ))}
          </section>

          {/* RÉCAPITULATIF DU PANIER */}
          <aside className="h-fit border border-black/10 bg-[#f8f8f8] p-6">
            <h2 className="font-mono text-[0.68rem] uppercase tracking-[0.25em] text-black/55">
              Récapitulatif
            </h2>

            <p className="mt-4 text-base text-black/65">
              Nombre d&apos;articles :{" "}
              {articles.reduce((total, article) => total + article.quantite, 0)}
            </p>

            <div className="mt-4 flex justify-between border-t border-black/10 pt-4">
              <span className="font-semibold text-black">Total</span>

              <span className="font-bold text-black">
                {formaterPrix(totalCentimes)}
              </span>
            </div>

            <button
              type="button"
              disabled
              className="mt-6 w-full cursor-not-allowed bg-black/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-black/45"
            >
              Commander prochainement
            </button>
          </aside>
        </div>
      )}
    </section>
  );
}
