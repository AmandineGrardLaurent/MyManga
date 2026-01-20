// Fonction factory qui retourne un gestionnaire d'événement "click"
export function handleClick({
  cart,
  currentPage,
  homepageContainer,
  productsData,
  displayCart,
}) {
  // Fonction réellement attachée à l'événement click
  return function (event) {
    // On vérifie que le clic provient bien d'un bouton "Ajouter au panier"
    if (!event.target.classList.contains("addCartBtn")) return;

    // Récupération de l'id du produit depuis l'attribut data-id du bouton
    const productId = event.target.dataset.id;

    // Ajout du produit au panier via la classe Cart
    cart.addToCart(productId);

    // Si l'utilisateur est actuellement sur la page panier
    // on ré-affiche le panier pour refléter la mise à jour sans recharger la page
    if (currentPage() === "cart") {
      displayCart(cart, homepageContainer, productsData);
    }
  };
}
