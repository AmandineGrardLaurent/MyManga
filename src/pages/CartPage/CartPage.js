import ItemCard from "../../components/ItemCard/ItemCard.js";

export function displayCart(cart, homepageContainer, productsData) {
  const cartIds = cart.getItemsId().map((id) => parseInt(id));

  homepageContainer.innerHTML = `<h2>Panier</h2> 
                                <section id="cart-products"></section>
                                <button class="clear-cart-btn">Vider le panier</button>
                                `;

  const sectionCart = document.getElementById("cart-products");

  productsData
    .filter((p) => cartIds.includes(p.id))
    .map((p) => {
      sectionCart.innerHTML += ItemCard(p, "cart");
    });
}
