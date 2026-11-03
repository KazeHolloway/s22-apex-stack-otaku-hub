# Guide de contribution

Merci de contribuer à Otaku Hub. Ce guide explique comment travailler ensemble sans se marcher dessus.

## Règles principales

- `main` et `dev` sont protégées : on ne pousse jamais directement dessus.
- Tout passe par une pull request (PR) vers `dev`.
- Chaque PR est relue et approuvée par au moins un autre membre avant la fusion.
- On ne fait pas de commit en vrac : un commit par fichier ou par sujet distinct.
- Aucun secret (mot de passe, clé, adresse de base de données) dans le dépôt.

## Mise en place locale

```bash
# Cloner le dépôt
git clone https://github.com/KazeHolloway/s22-apex-stack-otaku-hub.git

# Entrer dans le dossier
cd s22-apex-stack-otaku-hub

# Se placer sur la branche dev
git checkout dev

# Installer les dépendances
npm install

# Créer son fichier d'environnement local
cp .env.example .env.local
```

## Workflow d'une contribution

1. Vérifier la branche actuelle avec `git status`.
2. Se mettre à jour : `git checkout dev` puis `git pull origin dev`.
3. Créer sa branche : `git checkout -b feature/nom-court`.
4. Coder, puis tester en local (`npm run lint` et `npm run build`).
5. Faire ses commits (voir la convention ci-dessous).
6. Pousser la branche : `git push -u origin feature/nom-court`.
7. Ouvrir une pull request vers `dev` et demander une relecture.
8. Après la fusion, mettre à jour son `dev` local.

## Nom des branches

| Type | Format | Exemple |
|---|---|---|
| Fonctionnalité | `feature/description` | `feature/panier` |
| Correction | `fix/description` | `fix/redirection-connexion` |
| Maintenance | `chore/description` | `chore/config-eslint` |
| Documentation | `docs/description` | `docs/readme-rendu` |

## Convention de commits

On suit Conventional Commits : en minuscules, sans accents, avec une forme nominale ("ajout de", pas "ajoute").

Types utilisés : `feat`, `fix`, `style`, `docs`, `chore`, `refactor`.

Exemples :

```text
feat: ajout de la page catalogue
fix: correction de la redirection apres connexion
docs: ajout de la section rendu dans le readme
chore: configuration de eslint
```

Les titres de pull request suivent la même forme.

## Pull requests

Une bonne PR contient :

- un titre au format Conventional Commits ;
- une description courte de ce qui change et pourquoi ;
- le numéro de l'issue liée (par exemple `Closes #12`) ;
- des captures d'écran si l'interface change.

Avant d'ouvrir la PR, on vérifie que `npm run lint` et `npm run build` passent sans erreur.

## Relecture

Le relecteur vérifie que :

- le code compile et respecte ESLint ;
- le changement correspond à l'issue ;
- aucun secret n'est présent ;
- la PR reste petite et centrée sur un seul sujet.

## Style de code

- Indentation à 2 espaces.
- Commentaires en français, avec les accents, un commentaire par ligne.
- Faire uniquement ce que demande l'issue, sans modifier le travail des autres sans les prévenir.

## Livraison vers main

La livraison de `dev` vers `main` se fait avec "Create a merge commit", jamais "Squash and merge", pour garder l'historique de chacun visible.
