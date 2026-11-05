# Cadre MVP Otaku Hub

Ce document fixe le périmètre minimal du projet et les critères d'acceptation du MVP. Il sert de référence pour prioriser le backlog.

## Objectif

Otaku Hub est une boutique en ligne consacrée aux mangas et à leurs éditions collectors. Le parcours doit couvrir la consultation du catalogue, la fiche produit, l'authentification, l'ajout au panier et la consultation du profil.

## Fonctionnalités P0 et critères

- Catalogue avec tri par titre et navigation vers les fiches produits.
- Authentification par Credentials (session JWT) et compte de test documenté.
- Panier SSR avec gestion de quantités, calcul des totals et révalidation.
- Déploiement Vercel, Lighthouse ≥80 en performance et accessibilité, et `npm run lint`/build sans erreur.

## Hors périmètre

1. Paiement en ligne.
2. Commandes, factures et suivi de livraison.
3. Gestion de stock.
4. Interface d'administration.
5. Envoi réel de courriels.
6. Authentification par un service tiers.
7. Recherche avancée, filtres et favoris.
8. Multilingue.
9. Téléversement d'images.
10. Modification du profil et du mot de passe.

## Exigences de qualité

1. Auth.js. Connexion, déconnexion, session persistante et au moins une route protégée. Un compte de test est fourni dans le README. Preuve attendue : pull request auth fusionnée.
2. Déploiement Vercel. URL de production stable, variables d'environnement configurées et aucun secret dans le dépôt. Preuve attendue : URL et checklist de déploiement.
3. Stratégies de rendu. Au moins une page SSG, une page ISR et une page SSR, chacune justifiée dans la section Rendu du README. Preuve attendue : README à jour.
4. Backlog. Issues GitHub avec statut et assignation, avec au moins 70 pour cent des fonctionnalités prioritaires fermées. Preuve attendue : issues fermées et pull requests fusionnées.
5. Audit Lighthouse. Au moins 80 en Performance et en Accessibilité sur mobile, avec une capture dans le dépôt. Preuve attendue : capture et lien dans le README.
6. Bug bash. Au moins trois issues ouvertes sur le dépôt d'un autre groupe, avec les étapes de reproduction. Preuve attendue : liens vers les issues.