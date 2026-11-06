import { redirect } from "next/navigation";
import { auth } from "@/auth";
import FormulaireInscription from "@/components/FormulaireInscription";

export default async function PageInscription() {
  // Un utilisateur déjà connecté n'a pas besoin de cette page
  const session = await auth();
  if (session) redirect("/");

  return <FormulaireInscription />;
}