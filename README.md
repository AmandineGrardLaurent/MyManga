# MyManga Store

Une application web front-end pour afficher et gérer des produits manga avec panier dynamique et une navigation par catégorie.

---

## Table des matières

- [Description](#description)
- [Technologies](#technologies)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Fonctionnalités](#fonctionnalités)
- [Usage](#usage)
- [Conventions et bonnes pratiques](#conventions-et-bonnes-pratiques)

---

## Description

MyManga Store est une application web construite en **JavaScript**, sans framework, qui permet :

- La navigation entre différentes catégories de produits (livres, goodies, accessoires...)
- L’affichage détaillé des produits
- L’ajout et la suppression d’articles dans le panier
- La persistance du panier via **localStorage**
- Une interface réactive et modulable grâce à des composants réutilisables

L’objectif est d’illustrer la conception d’une SPA légère et organisée avec des composants et une architecture claire.

---

## Technologies

- **HTML5 / CSS3** pour la structure et le style
- **JavaScript** pour la logique front-end
- **Bootstrap 5** pour la mise en page et les composants UI
- **localStorage** pour la persistance des données côté client
- JSON pour les données produits

---

## Structure du projet

```perl
my-manga-store/
│
├─ index.html
├─ main.js                  # Point d’entrée du projet
├─ package.json
├─ README.md
|
├─ datas/
│   └─ productsData.json    # Liste des produits
├─ docs/
│   └─ classesDiagram.puml  # Documents du projet
│   └─ logo.png
│
├─ src/
│   ├─ components/          # Composants réutilisables
│   │   ├─ ItemCard/
│   │   ├─ ItemCardDetails/
│   │   └─ Sidebar/
│   │
│   ├─ helpers/             # Fonctions utilitaires et gestion d’événements
│   │   └─ helpers.js
│   │
│   ├─ models/              # Classes métiers
│   │   ├─ Cart.js
│   │   └─ Product.js
│   │   └─ Customer.js
│   │
│   └─ pages/               # Vues et pages
│       ├─ ProductsPage/
│       ├─ CartPage/
│       └─ ProductDetailsPage/
```

---

## Installation

**1.** Cloner le projet :

```yaml
git clone https://github.com/AmandineGrardLaurent/MyManga.git
```

**2.** Ouvrir le fichier index.html dans un navigateur moderne (Chrome, Firefox, Edge)

---

## Fonctionnalités

- Affichage des produits par catégorie

- Ajout au panier avec persistance dans localStorage

- Suppression d’articles individuellement ou vidage du panier

- Navigation SPA sans rechargement de page

- Affichage des détails d’un produit

- Sidebar fixe avec navigation entre produits et panier

---

## Usage

1. **Navigation** :
   - Sidebar à gauche pour accéder aux produits et au panier

   - Les boutons des catégories filtrent les produits affichés

2. **Panier** :
   - Ajouter un produit via le bouton « Ajouter au panier »

   - Supprimer un produit via le bouton « Retirer du panier »

   - Vider complètement le panier via « Vider le panier »

3. **Détails produit** :

Cliquer sur le bouton « + détails » pour afficher les informations complètes

---

## Conventions et bonnes pratiques

- ES6 modules pour une meilleure organisation du code

- Composants réutilisables (ItemCard, Sidebar)

- Pages séparées (ProductsPage, CartPage, ProductDetailsPage) pour gérer l’affichage

- Classe Cart pour la logique métier du panier et gestion de localStorage

- Helpers pour la gestion des événements et interactions utilisateur

---

**Auteur** : Amandine Grard-Laurent
