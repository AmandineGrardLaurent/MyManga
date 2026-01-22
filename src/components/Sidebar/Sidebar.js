// Composant Sidebar génère le menu latéral de navigation de l'application
// Permet de naviguer entre :
// - la liste complète des produits
// - les catégories de produits
// - le panier
export default function Sidebar() {
  const categories = ["Livre", "Poster", "Accessoire", "Figurine", "Goodie"];
  return `
      <nav
        class="container-menu d-flex flex-column bg-light border-end position-fixed vh-100 pt-3 px-3"
        style="width: 220px;"
      >
        <img src="../../../docs/logo.png" alt="logo"/>
        <button class="btn btn-success w-100 mb-2 rounded-pill my-4" data-page="products">
          Tous les produits
        </button>
        ${categories
          .map(
            (category) =>
              `<button class="btn btn-warning w-100 mb-2 rounded-pill" data-category=${category}>
          ${category}
        </button>`,
          )
          .join("")}
        <button class="btn btn-danger w-100 mb-2 rounded-pill" data-page="cart">
          Panier
        </button>
      </nav>
  `;
}
