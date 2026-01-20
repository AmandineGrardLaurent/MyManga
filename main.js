import { displayCategory, handleClick } from "./src/helpers/helpers.js";

// Fonction pour récupérer les données du fichier JSON
// Utilisation de fetch + await pour obtenir productsData
async function loadProducts() {
  const res = await fetch("./datas/productsData.json");
  const data = await res.json();
  return data.productsData;
}

// Récupération des produits depuis le JSON
const productsData = await loadProducts();

// Sélection du conteneur où les produits seront affichés
const container = document.getElementById("container-products");

// displayCategory("Livre", container, productsData);
displayCategory("All", container, productsData);

// Gestion des événements pour ajouter un produit au panier
container.addEventListener("click", handleClick);
