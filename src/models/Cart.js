export default class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem("cart")) || [];
  }

  // Fonction pour ajouter un produit au panier
  addToCart(productId) {
    this.items.push(productId);
    localStorage.setItem("cart", JSON.stringify(this.items));
    alert("Produit ajouté au panier");
  }

  // Fonction pour vider le panier
  clearCart() {
    this.items = [];
    localStorage.setItem("cart", JSON.stringify(this.items));
    alert("Panier vidé");
  }

  getItems() {
    return this.items;
  }
}
