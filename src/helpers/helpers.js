import ItemCard from "../components/ItemCard/ItemCard.js";
import Cart from "../models/Cart.js";

const cart = new Cart();

export function displayCategory(categoryName, container, productsData) {
  // Définir le titre
  let title =
    categoryName === "All"
      ? "Tous les produits"
      : `La liste de la catégorie ${categoryName}`;

  container.innerHTML = `<h2>${title}</h2><section id="category-products"></section>`;

  // Sélectionner la section où on mettra les produits
  const section = document.getElementById("category-products");

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

// Fonction de gestion du clic sur les boutons "Ajouter au panier"
// On vérifie que le clic est sur un bouton spécifique et on récupère l'id du produit
export function handleClick(event) {
  if (!event.target.classList.contains("addCartBtn")) return;
  const productId = event.target.dataset.id;
  cart.addToCart(productId);
}
