import ItemCard from "../../components/ItemCard/ItemCard.js";

// Page Panier
// Affiche la liste des articles présents dans le panier
export function CartPage(cart, homepageContainer, productsData) {
  // Récupére les ids des articles du panier
  const cartIds = cart.getItemsId().map((id) => parseInt(id));

  // Génére la structure HTML de la page panier
  // Si le panier est vide alors le bouton 'vider le panier' n'est pas présent
  homepageContainer.innerHTML = `
    <h2>Panier</h2> 
    <section id="cart-products"></section>
    ${
      cart.getItemsId().length === 0
        ? ""
        : '<button class="clear-cart-btn btn btn-warning mt-3 rounded-pill">Vider le panier</button>'
    }
  `;

  // Sélection de la section qui affichera les articles du panier
  const sectionCart = document.getElementById("cart-products");

  // Ajout des classes Bootstrap
  sectionCart.classList.add(
    "row",
    "row-cols-1",
    "row-cols-sm-2",
    "row-cols-md-4",
    "g-3",
    "mb-3",
  );

  // Filtrage des produits pour ne garder que ceux présents dans le panier
  // Puis création des cartes produit
  productsData
    .filter((p) => cartIds.includes(p.id))
    .map((p) => {
      const col = document.createElement("div");
      col.className = "col";
      col.innerHTML = ItemCard(p, "cart");
      sectionCart.appendChild(col);
    });
}
