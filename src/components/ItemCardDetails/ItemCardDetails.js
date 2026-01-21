export default function ItemCardDetails(product) {
  return `
      <article
        class="container-card card mb-3 border-warning"

      ><h2>${product.name}</h2>
        <div
          class="d-flex align-items-center justify-content-center bg-light rounded"
          style="height: 300px;"
        >
            
          <img
            src="${product.pictureURL}"
            class="img-fluid"
            alt="${product.name}"
            style="max-height: 100%; max-width: 100%;"
          />
        </div>
        <div class="card-body d-flex flex-column">

          <p class="card-text">Catégorie : ${product.category}</p>
          <p class="card-text">Description : ${product.description}</p>
          <p class="card-text">Prix : ${product.price} €</p>
          <button
            class="add-cart-btn btn btn-warning rounded-pill mt-auto"
            data-id="${product.id}"
          >
            Ajouter au panier
          </button>
                  <button class="return-btn btn btn-secondary rounded-pill mt-2">
          <i class="bi bi-arrow-left"></i> Retour
        </button>
        </div>
      </article>

  `;
}
