import ItemCard from "../../components/ItemCard/ItemCard.js";

// Page Produits
// Affiche la liste des articles selon une catégorie donnée
export function ProductsPage(categoryName, container, productsData) {
  // Définir le titre selon la catégorie
  const title =
    categoryName === "All" ? "Tous les produits" : `Catégorie ${categoryName}`;

  // On vide le container avant affichage
  container.innerHTML = `
    <h2 class="mb-4">${title}</h2>
    <div id="products-list" class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3"></div>
  `;

  const section = document.getElementById("products-list");

  // Filtrer les produits selon la catégorie
  // "All" affiche tous les produits
  // sinon on affiche le nom de la catégorie
  const filteredProducts =
    categoryName === "All"
      ? productsData
      : productsData.filter((p) => p.category === categoryName);

  // Ajouter les produits dans la section
  filteredProducts.forEach((p) => {
    const col = document.createElement("div");
    col.className = "col d-flex justify-content-center";
    col.innerHTML = ItemCard(p, "products");
    section.appendChild(col);
  });
}
