// Nouveau nom du middleware dans Next.js 16
export { auth as proxy } from "@/auth";

// Seules ces pages passent par le proxy
export const config = {
  matcher: ["/panier/:path*", "/profil/:path*"],
};