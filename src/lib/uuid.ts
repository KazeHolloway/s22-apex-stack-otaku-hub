// Forme d'un identifiant UUID
const MODELE_UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// Vérifie qu'une chaîne est un UUID valide, pour éviter une erreur de la base
export function estUuid(valeur: string): boolean {
  return MODELE_UUID.test(valeur);
}