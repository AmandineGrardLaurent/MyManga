import { handleClick } from "./src/helpers/helpers.js";
import { displayProducts } from "./src/pages/ProductsPage/ProductsPage.js";
import Cart from "./src/models/Cart.js";
import Sidebar from "./src/components/Sidebar/Sidebar.js";
import { displayCart } from "./src/pages/CartPage/CartPage.js";

const cart = new Cart();

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
const homepageContainer = document.getElementById("homepage");
const sidebarContainer = document.getElementById("sidebar");
let currentPage = "products";

sidebarContainer.innerHTML = Sidebar();

sidebarContainer.addEventListener("click", (event) => {
  const page = event.target.dataset.page;
  const category = event.target.dataset.category;

  if (page == "products") {
    currentPage = "products";
    displayProducts("All", homepageContainer, productsData);
  }

  if (category) {
    currentPage = "products";
    displayProducts(category, homepageContainer, productsData);
  }

  if (page == "cart") {
    currentPage = "cart";
    displayCart(cart, homepageContainer, productsData);
  }
});

// Gestion des événements pour ajouter un produit au panier
homepageContainer.addEventListener(
  "click",
  handleClick({
    cart,
    homepageContainer,
    productsData,
    displayCart,
  }),
);
