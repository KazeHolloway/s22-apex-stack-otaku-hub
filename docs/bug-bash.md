# Bug bash

Pièce 6 du livrable S22 : issues ouvertes sur les dépôts d'autres groupes, avec les étapes pour reproduire chaque problème.

Le groupe 2 (Apex Stack) a testé les six groupes qui avaient livré leur dépôt avant la date limite. Les groupes 4, 5 et 8 n'avaient pas livré : ils ne sont pas testés.

## Méthode

- Lecture du README et de l'arborescence de chaque dépôt (API GitHub), comparées aux critères du livrable.
- Vérification des pages en ligne avec des requêtes HTTP (codes de réponse, redirections, titres, langue, cache).
- Mesure Lighthouse en ligne de commande sur l'application déployée.
- Chaque issue décrit les étapes pour reproduire, le résultat attendu, le résultat obtenu et une suggestion, dans un ton courtois.

## Récapitulatif

| Groupe | Dépôt | Application | Issues ouvertes |
|---|---|---|---|
| 10 | [Flammeduciel/shop_n_pay](https://github.com/Flammeduciel/shop_n_pay) | [shop-n-pay-psi.vercel.app](https://shop-n-pay-psi.vercel.app) | 4 |
| 9 | [Benicia264/prix-mboka](https://github.com/Benicia264/prix-mboka) | [prix-mboka.vercel.app](https://prix-mboka.vercel.app) | 3 |
| 7 | [thedev-it/s22-groupe7-nextjs-app](https://github.com/thedev-it/s22-groupe7-nextjs-app) | [ekoloevent-cg.vercel.app](https://ekoloevent-cg.vercel.app) | 4 |
| 6 | [jonathanesaie21-art/S22-TaskFlow](https://github.com/jonathanesaie21-art/S22-TaskFlow) | [s22-taskflow.vercel.app](https://s22-taskflow.vercel.app) | 3 |
| 1 | [sun123isa/boncop](https://github.com/sun123isa/boncop) | [boncop-vqeo.vercel.app](https://boncop-vqeo.vercel.app) | 4 |
| 3 | [jorivas021/MoneyTrack-S22](https://github.com/jorivas021/MoneyTrack-S22) | [moneytrack-s22.vercel.app](https://moneytrack-s22.vercel.app) | 2 |

Total : 20 issues ouvertes dans 6 dépôts.

## Groupe 10 : Shop&Pay

| Issue | Titre | Auteur |
|---|---|---|
| [#27](https://github.com/Flammeduciel/shop_n_pay/issues/27) | docs: l'URL de production est encore un modèle dans le README | KazeHolloway |
| [#28](https://github.com/Flammeduciel/shop_n_pay/issues/28) | fix: les prix de test (10 FCFA) sont encore affichés en production | KazeHolloway |
| [#29](https://github.com/Flammeduciel/shop_n_pay/issues/29) | docs: des lignes de tableau séparées par une ligne vide cassent l'affichage du README | KazeHolloway |
| [#30](https://github.com/Flammeduciel/shop_n_pay/issues/30) | docs: aucune pull request visible, relectures et contributions non vérifiables | KazeHolloway |

## Groupe 9 : Prix Mboka

| Issue | Titre | Auteur |
|---|---|---|
| [#28](https://github.com/Benicia264/prix-mboka/issues/28) | docs: le fichier .env.example cité dans le README est absent du dépôt | KazeHolloway |
| [#29](https://github.com/Benicia264/prix-mboka/issues/29) | fix: la langue de la page est déclarée en anglais alors que le site est en français | KazeHolloway |
| [#30](https://github.com/Benicia264/prix-mboka/issues/30) | fix: les pages /connexion, /prix et /mes-signalements affichent le titre par défaut "Create Next App" en title | KazeHolloway |

## Groupe 7 : EkoloEvent

| Issue | Titre | Auteur |
|---|---|---|
| [#44](https://github.com/thedev-it/s22-groupe7-nextjs-app/issues/44) | [BUG] fix: /mes-tickets renvoie une 404 en production | elyseeMB |
| [#45](https://github.com/thedev-it/s22-groupe7-nextjs-app/issues/45) | [BUG] fix: /evenements/nouveau renvoie une 404 en production pour un organisateur connecté | elyseeMB |
| [#46](https://github.com/thedev-it/s22-groupe7-nextjs-app/issues/46) | [BUG] docs: le champ "Website" du dépôt pointe vers une URL qui renvoie une erreur 404 | KazeHolloway |
| [#47](https://github.com/thedev-it/s22-groupe7-nextjs-app/issues/47) | chore: les dossiers .agents et .claude (178 fichiers) sont toujours suivis par Git | KazeHolloway |

## Groupe 6 : TaskFlow

| Issue | Titre | Auteur |
|---|---|---|
| [#31](https://github.com/jonathanesaie21-art/S22-TaskFlow/issues/31) | docs: le README ne fournit pas de compte de test | KazeHolloway |
| [#32](https://github.com/jonathanesaie21-art/S22-TaskFlow/issues/32) | docs: le README ne liste pas les membres du groupe ni leurs comptes Git | KazeHolloway |
| [#33](https://github.com/jonathanesaie21-art/S22-TaskFlow/issues/33) | docs: l'audit Lighthouse n'est pas rempli et la capture n'est pas dans le dépôt | KazeHolloway |

## Groupe 1 : BonCop

| Issue | Titre | Auteur |
|---|---|---|
| [#40](https://github.com/sun123isa/boncop/issues/40) | docs: la section "Rendu" (SSG, ISR, SSR) demandée par le livrable est absente du README | KazeHolloway |
| [#41](https://github.com/sun123isa/boncop/issues/41) | docs: pas de tableau d'équipe avec les comptes Git des membres | KazeHolloway |
| [#42](https://github.com/sun123isa/boncop/issues/42) | fix: les redirections (déconnexion, page protégée) pointent vers http://localhost:3000 en production | KazeHolloway |
| [#43](https://github.com/sun123isa/boncop/issues/43) | docs: l'URL de production n'est pas indiquée dans le README | KazeHolloway |

## Groupe 3 : MoneyTrack

| Issue | Titre | Auteur |
|---|---|---|
| [#41](https://github.com/jorivas021/MoneyTrack-S22/issues/41) | docs: le README ne relie pas les membres à leurs comptes GitHub | KazeHolloway |
| [#43](https://github.com/jorivas021/MoneyTrack-S22/issues/43) | docs: la section "Rendu" (SSG, ISR, SSR) demandée par le livrable est absente du README | KazeHolloway |

## Issues par compte du groupe 2

Chiffres au 9 novembre 2026, limités aux dépôts des groupes S22 ci-dessus.

| Compte | Membre | Issues ouvertes |
|---|---|---|
| KazeHolloway | MASSAMBA BOUESSO Christophe Darly | 18 |
| elyseeMB | MBOUSSA Emmanuelito | 2 |
| Deekskn | KOY Jude Airich | 0 |
| theos1401 | OKANIA Patience Théo | 0 |
| BrissamDev | MOUKOUANGA TOMBET Brissam Josué | 0 |