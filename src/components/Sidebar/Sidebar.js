export default function Sidebar() {
  return `
    <nav class="container-menu">
      <button data-page="products">Tous les produits</button>
      <button data-category="Livre">Livres</button>
      <button data-category="Goodie">Goodies</button>
      <button data-category="Accessoire">Accessoires</button>
      <button data-page="cart">Panier</button>
    </nav>

  `;
}
