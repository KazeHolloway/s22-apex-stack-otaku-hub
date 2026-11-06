# Otaku Hub - Apex Stack (S22)

Site de démonstration d'une boutique de mangas et de jeux vidéo, construit avec Next.js, Auth.js et déployé sur Vercel.

Projet de groupe réalisé dans le cadre du livrable de Semaine 22 d'Akieni Academy, Cohorte 2.

## Démo en ligne

- URL de production : à compléter après le premier déploiement Vercel
- Compte de test : à compléter (e-mail et mot de passe de démonstration)

## Sommaire

- [Otaku Hub - Apex Stack (S22)](#otaku-hub---apex-stack-s22)
  - [Démo en ligne](#démo-en-ligne)
  - [Sommaire](#sommaire)
  - [Contexte](#contexte)
  - [Fonctionnalités](#fonctionnalités)
  - [Rendu](#rendu)
  - [Stack technique](#stack-technique)
  - [Démarrage rapide](#démarrage-rapide)
  - [Variables d'environnement](#variables-denvironnement)
  - [Structure du projet](#structure-du-projet)
  - [Déploiement](#déploiement)
  - [Audit Lighthouse](#audit-lighthouse)
  - [Équipe](#équipe)
  - [Workflow Git](#workflow-git)
  - [Documentation du dépôt](#documentation-du-dépôt)
  - [Liens : Live + Repository + README](#liens--live--repository--readme)

## Contexte

Otaku Hub est un site de démonstration qui permet de parcourir un catalogue de mangas et de jeux vidéo, de se connecter et de gérer son panier.

C'est un exercice pratique, pas un vrai site de vente : il n'y a aucun paiement en ligne et aucune vraie commande. Le panier sert surtout à illustrer le rendu côté serveur d'une page qui dépend de l'utilisateur connecté.

Le projet répond au livrable S22 : une application Next.js avec authentification, déployée sur Vercel, qui illustre les trois stratégies de rendu (SSG, ISR, SSR). Il est réalisé en une semaine, du 02 au 06 novembre 2026, avec une démo le vendredi pendant le stand-up.

## Fonctionnalités

Liste à confirmer, elle sera reprise dans les issues GitHub.

- Authentification : connexion, déconnexion, session persistante
- Catalogue des produits avec détail d'un produit
- Panier de l'utilisateur connecté (sans paiement en ligne)
- Profil de l'utilisateur connecté
- Pages d'information (accueil, à propos, contact)

## Rendu

Chaque page utilise la stratégie adaptée à son contenu et à ses données.

| Stratégie | Pages | Justification |
|---|---|---|
| SSG (génération statique) | Accueil, à propos, contact | Ces pages sont pré-générées au build, car leur contenu est public et change peu. |
| ISR (régénération incrémentale) | Catalogue et fiches produit | Les données viennent du catalogue en base. Les pages sont régénérées au plus toutes les 60 secondes pour tenir compte des changements sans refaire tout le build. |
| SSR (rendu serveur) | Panier, profil, connexion, inscription | Ces pages vérifient la session et adaptent leur contenu ou leur redirection à l'utilisateur connecté. |

Les routes API ne sont pas des pages et ne sont donc pas incluses dans ce tableau.

## Stack technique

| Domaine | Outil |
|---|---|
| Framework | Next.js (App Router) |
| Langage | TypeScript |
| Style | Tailwind CSS |
| Authentification | Auth.js |
| Base de données | PostgreSQL hébergé sur Neon |
| Hébergement | Vercel |
| Qualité | ESLint |
| Versionnement | Git et GitHub |

L'accès à la base de données (ORM ou requêtes directes) sera précisé ici dès que l'équipe l'aura choisi.

## Démarrage rapide

Prérequis : Node.js 20 ou plus récent, npm et Git.

```bash
# Cloner le dépôt
git clone https://github.com/KazeHolloway/s22-apex-stack-otaku-hub.git

# Entrer dans le dossier
cd s22-apex-stack-otaku-hub

# Installer les dépendances
npm install

# Créer le fichier d'environnement local à partir du modèle
cp .env.example .env.local

# Lancer le serveur de développement
npm run dev
```

L'application est ensuite disponible sur http://localhost:3000.

Autres commandes utiles :

```bash
# Vérifier le code avec ESLint
npm run lint

# Construire la version de production
npm run build
```

## Variables d'environnement

Le fichier `.env.example` liste les variables nécessaires, sans aucune valeur secrète. Le vrai fichier `.env.local` n'est jamais envoyé sur GitHub.

Sur Vercel, les variables se configurent dans Settings, puis Environment Variables.

## Structure du projet

Structure cible, elle sera ajustée au fil du développement.

```text
s22-apex-stack-otaku-hub/
├── public/              # Fichiers statiques (images, favicon)
├── src/
│   ├── app/             # Pages et routes (App Router)
│   ├── components/      # Composants réutilisables
│   └── lib/             # Fonctions utilitaires et accès aux données
├── .env.example         # Modèle des variables d'environnement
├── CHANGELOG.md         # Historique des versions
├── CODE_OF_CONDUCT.md   # Guide de conduite
├── CONTRIBUTING.md      # Guide de contribution
└── README.md
```

## Déploiement

L'application est déployée sur Vercel, avec une base PostgreSQL sur Neon.

Checklist de déploiement (à compléter par KazeHolloway) :

- [ ] Projet Vercel relié au dépôt GitHub
- [ ] Variables d'environnement configurées sur Vercel
- [ ] Base Neon créée et connectée
- [ ] URL de production stable notée dans ce README
- [ ] Aucun secret dans le dépôt

## Audit Lighthouse

Objectif : au moins 80 en Performance et en Accessibility sur mobile.

La capture de l'audit sera ajoutée dans le dépôt et liée ici.

## Équipe

Groupe 2 (Apex Stack), Akieni Academy, Cohorte 2.

| Membre | Compte GitHub | Rôle S22 |
|---|---|---|
| MASSAMBA BOUESSO Christophe Darly (Kaze) | KazeHolloway | Déploiement, Admin Repo |
| MBOUSSA Emmanuelito | à compléter | à définir |
| OKANIA Patience Théo | à compléter | à définir |
| MOUKOUANGA TOMBET Brissam Josué | à compléter | à définir |
| NDENDE Christ | à compléter | à définir |

## Workflow Git

- Les branches `main` et `dev` sont protégées, aucune modification directe.
- Chaque travail se fait sur une branche dédiée, puis passe par une pull request relue par un autre membre.
- Les commits suivent la convention Conventional Commits.

Le détail est dans [CONTRIBUTING.md](CONTRIBUTING.md).

## Documentation du dépôt

- [Guide de contribution](CONTRIBUTING.md)
- [Guide de conduite](CODE_OF_CONDUCT.md)
- [Historique des versions](CHANGELOG.md)

## Liens : Live + Repository + README

- [Lien live](à compléter)
- [Lien vers le repository](https://github.com/KazeHolloway/s22-apex-stack-otaku-hub)
- [Lien vers le README](https://kazeholloway.github.io/s22-apex-stack-otaku-hub/)
