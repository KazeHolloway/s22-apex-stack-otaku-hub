import { redirect } from "next/navigation";
import { auth } from "@/auth";
import FormulaireConnexion from "@/components/FormulaireConnexion";

export default async function PageConnexion() {
  // Un utilisateur déjà connecté n'a pas besoin de cette page
  const session = await auth();
  if (session) redirect("/");

  return (
    <div className="w-full bg-white py-16">
      <h2 className="max-w-2xl m-auto mt-4 px-4 text-[clamp(2.25rem,5vw,4rem)] leading-[0.9] font-bold uppercase pt-16">
        Bon retour, otaku
      </h2>
      <FormulaireConnexion />
    </div>
  );
}
