# Diagramme entité-relation

Base PostgreSQL (Neon) gérée avec Drizzle ORM. Tous les identifiants sont des UUID aléatoires.

```mermaid
erDiagram
  UTILISATEURS ||--o{ PANIER_ARTICLES : possede
  PRODUITS ||--o{ PANIER_ARTICLES : contient

  UTILISATEURS {
    uuid id PK
    text nom
    text email UK
    text mot_de_passe_hash
    timestamptz cree_le
  }

  PRODUITS {
    uuid id PK
    text titre
    text auteur
    text description
    integer prix_centimes
    text image
    timestamptz cree_le
  }

  PANIER_ARTICLES {
    uuid id PK
    uuid utilisateur_id FK
    uuid produit_id FK
    integer quantite
    timestamptz ajoute_le
  }
```

## Contraintes

- `utilisateurs.email` : unique, et égal à `lower(email)` (CHECK), donc toujours en minuscules.
- `produits.prix_centimes` : supérieur ou égal à 0 (CHECK).
- `panier_articles.quantite` : 1 par défaut, entre 1 et 99 (CHECK).
- `panier_articles` : le couple (`utilisateur_id`, `produit_id`) est unique, un manga n'apparaît qu'une fois par panier.

## Règles de suppression

- Suppression d'un utilisateur : son panier est supprimé aussi (`ON DELETE CASCADE`).
- Suppression d'un produit : refusée s'il est dans un panier (`ON DELETE RESTRICT`).