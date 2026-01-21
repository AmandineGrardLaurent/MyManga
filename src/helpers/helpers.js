// Fonction factory qui retourne un gestionnaire d'événement "click"
export function handleClick({
  cart,

  homepageContainer,
  productsData,
  displayCart,
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
      displayCart(cart, homepageContainer, productsData);

      // Le clic provient du bouton remove-cart-btn (supprimer du panier)
    } else if (event.target.classList.contains("remove-cart-btn")) {
      cart.removeFromCart(productId);

      // on ré-affiche le panier pour refléter la mise à jour sans recharger la page
      displayCart(cart, homepageContainer, productsData);
    }
  };
}
