export default class Cart {
  constructor() {
    this.itemsId = JSON.parse(localStorage.getItem("cart")) || [];
  }

  // Fonction pour ajouter un produit au panier
  addToCart(productId) {
    // On récupère le panier dans le navigateur (à jour)
    this.itemsId = JSON.parse(localStorage.getItem("cart")) || [];

    // On vérifie si le produit est déjà présent dans le panier
    if (!this.itemsId.includes(productId)) {
      // On ajoute l'id du produit dans le panier
      this.itemsId.push(productId);
      localStorage.setItem("cart", JSON.stringify(this.itemsId));
      alert("Produit ajouté au panier");
    } else {
      alert("Produit déjà présent dans le panier");
    }
  }

  // Fonction pour vider le panier
  clearCart() {
    this.itemsId = [];
    localStorage.setItem("cart", JSON.stringify(this.itemsId));
    alert("Panier vidé");
  }

  getItemsId() {
    return this.itemsId;
  }
}
