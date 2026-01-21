import {
  handleClickHomepage,
  handleClickSidebar,
} from "./src/helpers/helpers.js";
import { ProductsPage } from "./src/pages/ProductsPage/ProductsPage.js";
import Cart from "./src/models/Cart.js";
import Sidebar from "./src/components/Sidebar/Sidebar.js";
import { CartPage } from "./src/pages/CartPage/CartPage.js";
import { ProductDetailsPage } from "./src/pages/ProductDetailsPage/ProductDetailsPage.js";

const cart = new Cart();

/////////////////////////// DATA ///////////////////////////

// Fonction pour récupérer les données du fichier JSON
// Utilise fetch + async/await pour charger les produits
async function loadProducts() {
  const res = await fetch("./datas/productsData.json");
  const data = await res.json();
  return data.productsData;
}

// Récupére les articles depuis le JSON
const productsData = await loadProducts();

/////////////////////////// ETAT DE LA PAGE (products | cart) ///////////////////////////

// Page actuellement affichée
let currentPage = "products";

// Fonction permettant de mettre à jour la page courante
const setCurrentPage = (page) => {
  currentPage = page;
};

/////////////////////////// MAIN ///////////////////////////

// Sélection du conteneur principal où le contenu des pages sera affiché
const homepageContainer = document.getElementById("homepage");
homepageContainer.style.marginLeft = "220px"; // largeur de la sidebar

// Sélection du conteneur de la sidebar
const sidebarContainer = document.getElementById("sidebar");

// Affichage de la sidebar
sidebarContainer.innerHTML = Sidebar();

// Affichage de tous les articles par défaut
ProductsPage("All", homepageContainer, productsData);

/////////////////////////// GESTION DES EVENEMENTS ///////////////////////////

// Gestion des clics dans la sidebar (navigation entre les pages et catégories)
sidebarContainer.addEventListener(
  "click",
  handleClickSidebar({
    cart,
    homepageContainer,
    productsData,
    CartPage,
    ProductsPage,
    setCurrentPage,
  }),
);

// Gestion des clics dans la zone principale (ajout au panier, suppression, détails produit...)
homepageContainer.addEventListener(
  "click",
  handleClickHomepage({
    cart,
    homepageContainer,
    productsData,
    CartPage,
    ProductDetailsPage,
    ProductsPage,
  }),
);
