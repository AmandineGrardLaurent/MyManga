// src/pages/ProductsPage.js
import ItemCard from "../../components/ItemCard/ItemCard.js";

export function displayProducts(categoryName, container, productsData) {
  // Définir le titre selon la catégorie
  const title =
    categoryName === "All" ? "Tous les produits" : `Catégorie ${categoryName}`;

  // On vide le container avant affichage
  container.innerHTML = `<h2>${title}</h2><section id="products-list"></section>`;
  const section = document.getElementById("products-list");

  // Filtrer les produits selon la catégorie
  const filteredProducts =
    categoryName === "All"
      ? productsData
      : productsData.filter((p) => p.category === categoryName);

  // Ajouter les produits dans la section
  filteredProducts.map((p) => {
    section.innerHTML += ItemCard(p);
  });
}
