import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { utilisateurs } from "@/lib/db/schema";

export const { handlers, auth, signIn, signOut } = NextAuth({
  // Session stockée dans un jeton JWT, obligatoire avec Credentials
  session: { strategy: "jwt" },
  // Page de connexion personnalisée
  pages: { signIn: "/connexion" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "E-mail", type: "email" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        // L'e-mail est toujours en minuscules dans la base
        const email = String(credentials?.email ?? "").trim().toLowerCase();
        const motDePasse = String(credentials?.password ?? "");
        if (!email || !motDePasse) return null;

        // Recherche de l'utilisateur par e-mail
        const [utilisateur] = await db
          .select()
          .from(utilisateurs)
          .where(eq(utilisateurs.email, email))
          .limit(1);
        if (!utilisateur) return null;

        // Comparaison avec le mot de passe haché
        const valide = await bcrypt.compare(motDePasse, utilisateur.motDePasseHash);
        if (!valide) return null;

        return { id: utilisateur.id, email: utilisateur.email, name: utilisateur.nom };
      },
    }),
  ],
  callbacks: {
    // Ajoute l'identifiant de l'utilisateur dans le jeton
    jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    // Rend l'identifiant disponible dans la session
    session({ session, token }) {
      if (token.id && session.user) session.user.id = token.id as string;
      return session;
    },
  },
});