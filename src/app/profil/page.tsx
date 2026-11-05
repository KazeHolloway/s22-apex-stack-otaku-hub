
import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";

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
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 py-12 text-white">
      <section className="w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-zinc-400">
            Otaku Hub
          </p>

          <h1 className="text-3xl font-bold">
            Mon profil
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            Consultez les informations de votre compte.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <p className="text-sm text-zinc-400">Nom</p>
            <p className="mt-1 text-lg font-semibold">{nom}</p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Adresse e-mail</p>
            <p className="mt-1 break-all text-lg font-semibold">{email}</p>
          </div>
        </div>

        <form action={deconnexion} className="mt-8">
          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Se déconnecter
          </button>
        </form>
      </section>
    </main>
  );
}
