# Journal des modifications

Tous les changements notables d'Otaku Hub sont notés dans ce fichier.

Le format s'inspire de [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/). Chaque entrée indique le numéro de la Pull Request (PR) et l'auteur.

Auteurs (comptes GitHub) :
- KazeHolloway : MASSAMBA BOUESSO Christophe Darly
- elyseeMB : MBOUSSA Emmanuelito
- Deekskn : KOY Jude Airich
- theos1401 : OKANIA Patience Théo
- BrissamDev : MOUKOUANGA TOMBET Brissam Josué

## [Non publié]

### Samedi 7 novembre 2026

#### Ajouté
- QR code vers la démo en ligne et compte de test dans le README (KazeHolloway)
- Résultats Lighthouse avec captures dans `docs/lighthouse/` (KazeHolloway)
- Section limites connues et pistes d'amélioration dans le README (KazeHolloway)
- Journal des modifications détaillé par jour, avec le récapitulatif des contributions (KazeHolloway)

#### Corrigé
- Erreurs de types masquées au build : suppression du composant `ButtonPrimary` inutilisé et retrait de l'option `ignoreBuildErrors` (PR #84, KazeHolloway)

### Vendredi 6 novembre 2026

#### Ajouté
- Page d'inscription (PR #68, Deekskn)
- Liens Panier, Profil et Connexion dans le menu (PR #61, KazeHolloway)
- Lien Inscription dans le menu et le pied de page, lien GitHub du menu et crédit Open Library (PR #77, KazeHolloway)
- Métadonnées SEO et icône du site (PR #75, elyseeMB)
- Explication des stratégies de rendu dans le README (PR #74, elyseeMB)
- Mise à jour des sections du README : équipe, stack, structure et liens (PR #78, KazeHolloway)

#### Modifié
- Affichage des prix en FCFA (PR #72, elyseeMB)
- Correction de l'interface des pages catalogue, produit, panier et profil (PR #73, elyseeMB)
- Retrait de l'animation Aurora du layout pour réduire le temps de blocage, menu masqué avec `inert`, contraste du pied de page, `metadataBase` et suppression d'un `console.log` (PR #80, KazeHolloway)

#### Corrigé
- Chevauchement des numéros du menu sur mobile (PR #63, KazeHolloway)
- Liens du pied de page (PR #65, KazeHolloway)
- Avertissements du lint (PR #67, KazeHolloway)
- Texte et équipe de la page à propos (PR #70, KazeHolloway)
- Miniatures des mangas (PR #71, elyseeMB)
- Contraste du slogan sous le logo (PR #82, KazeHolloway)

### Jeudi 5 novembre 2026

#### Ajouté
- Configuration d'Auth.js et route `api/auth` (PR #29, Deekskn)
- Page de connexion (PR #45, Deekskn)
- Proxy de protection des routes `/panier` et `/profil` (PR #46, KazeHolloway)
- Actions serveur du panier (PR #30, KazeHolloway)
- Route de santé `/api/health` (PR #33, KazeHolloway)
- Diagramme entité-relation `ERD.md` (PR #32, KazeHolloway)
- Page d'accueil, navigation et pied de page (PR #34, elyseeMB)
- Pages à propos et contact en rendu statique (PR #35, elyseeMB)
- Animations de mise en page (PR #38, elyseeMB)
- Guide de marque et cadrage du MVP (PR #40 et #42, elyseeMB)
- Vérifications automatiques TruffleHog et Lighthouse CI (PR #37 et #43, elyseeMB)
- Catalogue en ISR avec images `next/image` (PR #55, elyseeMB)
- Fiche produit et bouton d'ajout au panier (PR #44, theos1401)
- Page panier en rendu serveur (PR #59, BrissamDev)
- Page profil en rendu serveur (PR #36, BrissamDev)

#### Modifié
- Vérification Lighthouse CI allégée (PR #50, KazeHolloway)
- Correction de la tâche Lighthouse (PR #57, elyseeMB)
- Harmonisation de l'interface (PR #58, elyseeMB)

#### Corrigé
- Menu qui bloquait les clics du formulaire de connexion (PR #48, KazeHolloway)
- Message d'erreur de connexion trompeur (PR #52, KazeHolloway)
- Affichage de l'accueil sur mobile (PR #54, KazeHolloway)
- Retrait de `DATABASE_URL` de `.env.example` et réinitialisation du mot de passe de la base (elyseeMB, KazeHolloway)

### Mercredi 4 novembre 2026

#### Ajouté
- Intégration de Drizzle ORM, schéma de la base et connexion à Neon (PR #6, KazeHolloway)
- Fonctions d'accès aux données, vérification des UUID et données de test avec compte de démonstration (PR #9, KazeHolloway)
- Début de la page d'accueil : bannière, mise en page et défilement (elyseeMB)
- Début de la configuration d'Auth.js (Deekskn)

### Mardi 3 novembre 2026 (création du dépôt)

#### Ajouté
- Initialisation du projet Next.js (App Router, TypeScript, Tailwind CSS, ESLint) (KazeHolloway)
- README, guide de contribution, guide de conduite et journal des modifications (KazeHolloway)
- Modèle des variables d'environnement `.env.example` (KazeHolloway)

#### Modifié
- Désactivation de Cache Components (KazeHolloway)

## Récapitulatif des contributions

Chiffres tirés de l'historique GitHub au 7 novembre 2026 (PR fusionnées, commits sur toutes les branches, revues enregistrées sur les PR des autres, issues assignées).

| Compte | PR fusionnées | Commits | Revues faites | Issues assignées |
|---|---|---|---|---|
| KazeHolloway | 19 | 55 | 17 | 21 |
| elyseeMB | 15 | 28 | 13 | 11 |
| Deekskn | 3 | 9 | 8 | 5 |
| BrissamDev | 2 | 2 | 0 | 3 |
| theos1401 | 1 | 2 | 1 | 3 |

Remarque : les grosses PR de elyseeMB (#34, #35, #40, #42, #43) comptent de nombreuses lignes à cause du `package-lock.json` et de fichiers repris d'une branche à l'autre, leur taille ne reflète pas la quantité de code écrit. L'issue #10 (cadrage du MVP) est partagée entre elyseeMB, theos1401 et BrissamDev.