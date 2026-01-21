export default function Sidebar() {
  return `
    
      <nav
        class="container-menu d-flex flex-column bg-light border-end position-fixed vh-100 p-3"
        style="width: 220px;"
      >
        <img src="../../../docs/logo.png" />
        <button class="btn btn-outline-success w-100 mb-2" data-page="products">
          Tous les produits
        </button>
        <button
          class="btn btn-outline-success w-100 mb-2"
          data-category="Livre"
        >
          Livres
        </button>
        <button
          class="btn btn-outline-success w-100 mb-2"
          data-category="Goodie"
        >
          Goodies
        </button>
        <button
          class="btn btn-outline-success w-100 mb-2"
          data-category="Accessoire"
        >
          Accessoires
        </button>
        <button class="btn btn-outline-danger w-100 mb-2" data-page="cart">
          Panier
        </button>
      </nav>
    
  `;
}
