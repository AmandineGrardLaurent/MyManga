// Classe Cart
// Gère la logique du panier de l'application
// Le panier stocke uniquement les identifiants des articles dans le localStorage
export default class Cart {
  // Constructeur : initialise le panier à partir du localStorage (ids)
  // ou crée un tableau vide si rien n'existe encore
  constructor() {
    this.itemsId = JSON.parse(localStorage.getItem("cart")) || [];
  }

  // Fonction pour ajouter un article au panier
  // productId : identifiant unique de l'article
  addToCart(productId) {
    // On récupère le panier dans le navigateur (à jour)
    this.itemsId = JSON.parse(localStorage.getItem("cart")) || [];

    // On vérifie si l'article est déjà présent dans le panier
    if (!this.itemsId.includes(productId)) {
      // On ajoute l'id de l'article dans le panier
      this.itemsId.push(productId);

      // Mise à jour
      localStorage.setItem("cart", JSON.stringify(this.itemsId));

      alert("Article ajouté au panier");
    } else {
      alert("Article déjà présent dans le panier");
    }
  }

  // Fonction pour supprimer un article du panier
  // productId : identifiant unique de l'article
  removeFromCart(productId) {
    // Filtre l'id de l'article du tableau des ids
    this.itemsId = this.itemsId.filter((id) => id !== productId);

    // Mise à jour
    localStorage.setItem("cart", JSON.stringify(this.itemsId));

    alert("Article supprimé");
  }

  // Fonction pour vider le panier
  clearCart() {
    this.itemsId = [];

    // Mise à jour
    localStorage.setItem("cart", JSON.stringify(this.itemsId));

    alert("Panier vidé");
  }

  // Retourne la liste des ids des articles présents dans le panier
  getItemsId() {
    return this.itemsId;
  }

  // Retourne le prix total des articles du panier
  getCartTotal(productsData) {
    const cartIds = this.itemsId.map((id) => parseInt(id));
    return productsData
      .filter((p) => cartIds.includes(p.id))
      .reduce((total, p) => total + p.price, 0)
      .toFixed(2);
  }
}
