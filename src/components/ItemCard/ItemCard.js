// Composant ItemCard qui génère une carte produit
// - product : objet contenant les informations du produit
// - mode : permet d'adapter l'affichage selon le contexte ("products" pour une page produits ou "cart" pour le panier)
export default function ItemCard(product, mode) {
  return `
      <article
        class="container-card card mb-3 border-warning"
        style="width: 20rem;"
      >
        <div
          class="d-flex align-items-center justify-content-center bg-light rounded"
          style="height: 200px;"
        >
          <img
            src="${product.pictureURL}"
            class="img-fluid"
            alt="${product.name}"
            style="max-height: 100%; max-width: 100%;"
          />
        </div>
        <div class="card-body d-flex flex-column align-items-center">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price} €</p>

          ${
            /* Bouton "Ajouter au panier" 
            Affiche uniquement lorsque la carte
            est utilisée dans la page des produits*/
            mode === "products"
              ? `<button class="add-cart-btn btn btn-warning rounded-pill" style="width: 10rem;" data-id="${product.id}">
                 Ajouter au panier
               </button>`
              : ""
          }

          ${
            /* Bouton "Retirer du panier" 
            Affiche uniquement lorsque la carte
            est utilisée dans la page du panier */
            mode === "cart"
              ? `<button class="remove-cart-btn btn btn-danger rounded-pill" style="width: 10rem;" data-id="${product.id}">
                 Retirer du panier
               </button>`
              : ""
          }
          
          <button
            class="details-product-btn btn btn-success rounded-pill mt-2"
            style="width: 10rem;"
            data-id="${product.id}"
          >
            + détails
          </button>
        </div>
      </article>
  `;
}
