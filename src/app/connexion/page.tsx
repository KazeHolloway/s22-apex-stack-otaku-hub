import { redirect } from "next/navigation";
import { auth } from "@/auth";
import FormulaireConnexion from "@/components/FormulaireConnexion";

export default async function PageConnexion() {
  // Un utilisateur déjà connecté n'a pas besoin de cette page
  const session = await auth();
  if (session) redirect("/");

  return <FormulaireConnexion />;
}