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

    // Bouton add-cart-btn (ajouter au panier)
    if (event.target.classList.contains("add-cart-btn")) {
      cart.addToCart(productId);

      // Bouton clear-cart-btn (vider le panier)
    } else if (event.target.classList.contains("clear-cart-btn")) {
      cart.clearCart();

      // Ré-affiche le panier pour refléter la mise à jour sans recharger la page
      CartPage(cart, homepageContainer, productsData);

      // Bouton remove-cart-btn (supprimer du panier)
    } else if (event.target.classList.contains("remove-cart-btn")) {
      cart.removeFromCart(productId);

      // Ré-affiche le panier pour refléter la mise à jour sans recharger la page
      CartPage(cart, homepageContainer, productsData);

      // Bouton details-product-btn (+ détails)
    } else if (event.target.classList.contains("details-product-btn")) {
      ProductDetailsPage(productId, homepageContainer, productsData);

      // Bouton return-btn (retour accueil)
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

    // Si c'est une page produit
    if (page == "products") {
      setCurrentPage("products");

      // Affiche tous les produits
      ProductsPage("All", homepageContainer, productsData);
    }

    // Si on a une catégorie
    if (category) {
      setCurrentPage("products");

      // Affiche les produits filtrés par catégorie
      ProductsPage(category, homepageContainer, productsData);
    }

    // Si c'est une page panier
    if (page == "cart") {
      setCurrentPage("cart");

      // Affiche le panier
      CartPage(cart, homepageContainer, productsData);
    }
  };
}
