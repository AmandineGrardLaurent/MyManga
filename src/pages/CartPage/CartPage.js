import ItemCard from "../../components/ItemCard/ItemCard.js";

export function displayCart(cart, homepageContainer, productsData) {
  const cartIds = cart.getItemsId().map((id) => parseInt(id));

  homepageContainer.innerHTML = `<h2>Panier</h2> 
                                <section id="cart-products"></section>
                                <button class="clear-cart-btn btn btn-warning mt-3 rounded-pill">Vider le panier</button>
                                `;

  const sectionCart = document.getElementById("cart-products");
  sectionCart.classList.add(
    "row",
    "row-cols-1",
    "row-cols-sm-2",
    "row-cols-md-3",
    "g-3",
    "mb-3",
  );

  productsData
    .filter((p) => cartIds.includes(p.id))
    .map((p) => {
      const col = document.createElement("div");
      col.className = "col"; // colonne Bootstrap
      col.innerHTML = ItemCard(p, "cart");
      sectionCart.appendChild(col);
    });
}
