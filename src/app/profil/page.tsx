import type { Metadata } from "next";
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Mon profil · Otaku Hub",
  description: "Consultez les informations de votre compte Otaku Hub.",
};

async function deconnexion() {
  "use server";
  await signOut({ redirectTo: "/connexion" });
}

export default async function ProfilPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/connexion");
  }

  const nom = session.user.name || "Utilisateur";
  const email = session.user.email || "Adresse e-mail non disponible";

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-2xl flex mx-auto flex-col gap-6 p-6 sm:p-8 lg:p-10">
        <h2 className="max-w-2xl mt-4 text-[clamp(2.25rem,5vw,4rem)] leading-[0.9] font-bold uppercase">
          Mon profil
        </h2>
        <div className="flex flex-col gap-2">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.25em] text-black/55">
            Otaku Hub
          </p>

          <p className="text-base text-black/65">
            Consultez les informations de votre compte.
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="block font-mono text-[0.68rem] uppercase tracking-[0.25em] text-black/55">
            Nom
          </p>
          <p className="w-full border-0 border-b border-black/10 bg-transparent px-0 py-3 text-base text-black">
            {nom}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="block font-mono text-[0.68rem] uppercase tracking-[0.25em] text-black/55">
            Adresse e-mail
          </p>
          <p className="w-full break-all border-0 border-b border-black/10 bg-transparent px-0 py-3 text-base text-black">
            {email}
          </p>
        </div>

        <form action={deconnexion}>
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-4 bg-[#ef6363] px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-[#fd1818] disabled:cursor-wait disabled:opacity-60 cursor-pointer"
          >
            Se déconnecter
          </button>
        </form>
      </div>
    </section>
  );
}
