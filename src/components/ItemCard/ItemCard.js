export default function ItemCard(product, mode) {
  return `
    <article class="container-card card mb-3 border-warning" style="width: 18rem;">
      <div class="d-flex align-items-center justify-content-center bg-light rounded" style="height: 200px;">
  <img 
    src="${product.pictureURL}" 
    class="img-fluid" 
    alt="${product.name}" 
    style="max-height: 100%; max-width: 100%;"
  >
</div>
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">${product.price} €</p>

        ${
          mode === "products"
            ? `<button class="add-cart-btn btn btn-warning rounded-pill mt-auto" data-id="${product.id}">
                 Ajouter au panier
               </button>`
            : ""
        }

        ${
          mode === "cart"
            ? `<button class="remove-cart-btn btn btn-danger rounded-pill mt-auto" data-id="${product.id}">
                 Retirer du panier
               </button>`
            : ""
        }
      </div>
    </article>
  `;
}
