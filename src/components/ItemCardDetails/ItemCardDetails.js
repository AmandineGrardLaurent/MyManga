// Composant ItemCardDetails génère l'affichage détaillé d'un produit (page détail)
// - product : objet contenant toutes les informations du produit
export default function ItemCardDetails(product) {
  return `
          <article
            class="container-card card border-warning mx-auto my-5"
            style="width: 75%"
          >
            <h2>${product.name}</h2>
            <div class="d-flex align-items-center justify-content-center bg-light rounded">
              <img
                src="${product.pictureURL}"
                class="img-fluid"
                alt="${product.name}"
                style="max-height: 80%; max-width: 80%;"
              />
            </div>
            <div class="card-body d-flex flex-column">
              <p class="card-text">Catégorie : ${product.category}</p>
              <p class="card-text">Description : ${product.description}</p>
              <p class="card-text">Prix : ${product.price} €</p>
              <button
                class="add-cart-btn btn btn-warning rounded-pill m-auto"
                data-id="${product.id}"
              >
                Ajouter au panier
              </button>
              <button class="return-btn btn btn-secondary rounded-pill mt-2 m-auto">
                <i class="bi bi-arrow-left"></i> Retour
              </button>
            </div>
          </article>
  `;
}
