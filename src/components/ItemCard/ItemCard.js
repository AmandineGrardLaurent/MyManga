export default function ItemCard(product, mode) {
  return `
    <article class="container-card">
        <img src=${product.pictureURL} alt=${product.name} width="200"/>
        <p>${product.name}</p>
        <p>${product.price}</p>
        ${
          mode === "products"
            ? `<button class="add-cart-btn" data-id="${product.id}">
               Ajouter au panier
             </button>`
            : ""
        }

      ${
        mode === "cart"
          ? `<button class="remove-cart-btn" data-id="${product.id}">
               Retirer du panier
             </button>`
          : ""
      }
    </article>`;
}
