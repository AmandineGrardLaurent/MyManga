import { handleClick } from "./src/helpers/helpers.js";
import { ProductsPage } from "./src/pages/ProductsPage/ProductsPage.js";
import Cart from "./src/models/Cart.js";
import Sidebar from "./src/components/Sidebar/Sidebar.js";
import { CartPage } from "./src/pages/CartPage/CartPage.js";
import { ProductDetailsPage } from "./src/pages/ProductDetailsPage/ProductDetailsPage.js";
import ItemCardDetails from "./src/components/ItemCardDetails/ItemCardDetails.js";

const cart = new Cart();

// Fonction pour récupérer les données du fichier JSON
// Utilisation de fetch + await pour obtenir productsData
async function loadProducts() {
  const res = await fetch("./datas/productsData.json");
  const data = await res.json();
  return data.productsData;
}

// Récupére les articles depuis le JSON
const productsData = await loadProducts();

// Sélection du conteneur où les articles seront affichés
const homepageContainer = document.getElementById("homepage");
homepageContainer.style.marginLeft = "220px"; // largeur de la sidebar

const sidebarContainer = document.getElementById("sidebar");
let currentPage = "products";

// Affichage du sidebar
sidebarContainer.innerHTML = Sidebar();

ProductsPage("All", homepageContainer, productsData);
// homepageContainer.innerHTML = ProductDetailsPage(productsData);

// homepageContainer.innerHTML = ItemCardDetails(productsData[1]);

/////////////////////////// EVENEMENTS /////////////////////////////////////

// Écoute des clics dans le sidebar pour changer de page ou filtrer par catégorie
sidebarContainer.addEventListener("click", (event) => {
  const page = event.target.dataset.page;
  const category = event.target.dataset.category;

  if (page == "products") {
    currentPage = "products";

    // Affiche tous les produits
    ProductsPage("All", homepageContainer, productsData);
  }

  if (category) {
    currentPage = "products";

    // Affiche les produits filtrés par catégorie
    ProductsPage(category, homepageContainer, productsData);
  }

  if (page == "cart") {
    currentPage = "cart";

    // Affiche le panier
    CartPage(cart, homepageContainer, productsData);
  }
});

// Gestion des événements pour ajouter un article au panier
homepageContainer.addEventListener(
  "click",
  handleClick({
    cart,
    homepageContainer,
    productsData,
    CartPage,
    ProductDetailsPage,
    ProductsPage,
  }),
);
