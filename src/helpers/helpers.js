// Fonction factory qui retourne un gestionnaire d'événement "click" dans le container homepage
export function handleClickHomepage({
  cart,
  homepageContainer,
  productsData,
  CartPage,
  ProductDetailsPage,
  ProductsPage,
}) {
  // Fonction réellement attachée à l'événement click
  return function (event) {
    // Récupère l'id du produit depuis l'attribut data-id du bouton
    const productId = event.target.dataset.id;

    // Le clic provient du bouton add-cart-btn (ajouter au panier)
    if (event.target.classList.contains("add-cart-btn")) {
      // Ajout du produit au panier via la classe Cart
      cart.addToCart(productId);

      // Le clic provient du bouton clear-cart-btn (vider le panier)
    } else if (event.target.classList.contains("clear-cart-btn")) {
      cart.clearCart();

      // on ré-affiche le panier pour refléter la mise à jour sans recharger la page
      CartPage(cart, homepageContainer, productsData);

      // Le clic provient du bouton remove-cart-btn (supprimer du panier)
    } else if (event.target.classList.contains("remove-cart-btn")) {
      cart.removeFromCart(productId);

      // on ré-affiche le panier pour refléter la mise à jour sans recharger la page
      CartPage(cart, homepageContainer, productsData);
    } else if (event.target.classList.contains("details-product-btn")) {
      ProductDetailsPage(productId, homepageContainer, productsData);
    } else if (event.target.classList.contains("return-btn")) {
      ProductsPage("All", homepageContainer, productsData);
    }
  };
}

// Fonction factory qui retourne un gestionnaire d'événement "click" dans le container sidebar
export function handleClickSidebar({
  cart,
  homepageContainer,
  productsData,
  CartPage,
  ProductsPage,
  setCurrentPage,
}) {
  // Fonction réellement attachée à l'événement click
  return function (event) {
    const page = event.target.dataset.page;
    const category = event.target.dataset.category;

    if (page == "products") {
      setCurrentPage("products");

      // Affiche tous les produits
      ProductsPage("All", homepageContainer, productsData);
    }

    if (category) {
      setCurrentPage("products");

      // Affiche les produits filtrés par catégorie
      ProductsPage(category, homepageContainer, productsData);
    }

    if (page == "cart") {
      setCurrentPage("cart");

      // Affiche le panier
      CartPage(cart, homepageContainer, productsData);
    }
  };
}
