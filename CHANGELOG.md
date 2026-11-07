# Changelog

Toutes les modifications importantes du projet sont notées dans ce fichier.

Le format suit [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/) et le projet utilise le [versionnage sémantique](https://semver.org/lang/fr/).

## [Non publié]

### Ajouté

- Initialisation du projet Next.js (App Router, TypeScript, Tailwind CSS, ESLint)
- Ajout du README, du guide de contribution, du guide de conduite et du changelog
- Base de données PostgreSQL sur Neon avec Drizzle ORM (#6)
- Fonctions d'accès aux données et données de test (#9)
- Configuration d'Auth.js (#29)
- Page de connexion (#45) et page d'inscription (#68)
- Protection des routes /panier et /profil par le proxy (#46)
- Actions serveur du panier (#30)
- Route de santé /api/health (#33)
- Diagramme entité-relation de la base de données (#32)
- Page d'accueil, navigation, pied de page, pages à propos et contact (#34, #35)
- Guide de marque et cadrage du MVP (#40, #42)
- Catalogue en ISR avec images next/image (#55)
- Fiche produit et bouton d'ajout au panier (#44)
- Page panier (#59) et page profil (#36)
- Liens panier, profil et connexion dans le menu (#61)
- Vérifications automatiques Lighthouse CI et TruffleHog (#37, #43, #57)
- Métadonnées SEO et icône du site (#75)
- Lien Inscription dans le menu et le pied de page, crédit Open Library (issue #76)
- Documentation du rendu, des résultats Lighthouse et des pistes d'amélioration (#74, #78)

### Modifié

- Retrait de l'animation Aurora du layout pour réduire le temps de blocage (#80)
- Prix affichés en FCFA (#72)

### Corrigé

- Menu qui bloquait les clics du formulaire de connexion (#48)
- Message d'erreur de connexion trompeur (#52)
- Affichage de l'accueil sur mobile (#54)
- Chevauchement des numéros du menu sur mobile (#63)
- Liens du pied de page (#65)
- Avertissements du lint (#67)
- Texte et équipe de la page à propos (#70)
- Miniatures des mangas (#71)
- Harmonisation de l'interface (#73)
- Accessibilité du menu masqué, contraste du pied de page et metadataBase (#80)
- Contraste du slogan sous le logo
