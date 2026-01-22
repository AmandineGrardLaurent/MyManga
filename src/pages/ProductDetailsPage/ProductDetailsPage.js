import ItemCardDetails from "../../components/ItemCardDetails/ItemCardDetails.js";

// Page Détails produit
// Affiche les informations détaillées d’un article sélectionné
export function ProductDetailsPage(productId, homepageContainer, productsData) {
  homepageContainer.innerHTML = `
    <section id="products-details"></section>
  `;

  // Sélection de la section qui contiendra la carte détail du produit
  const sectionCardDetails = document.getElementById("products-details");

  // Ajout des classes Bootstrap
  sectionCardDetails.classList.add(
    "row",
    "row-cols-1",
    "row-cols-sm-2",
    "row-cols-md-3",
    "g-3",
    "mb-3",
  );

  // Récupération du produit à afficher à partir de son id
  // "- 1" car les ids commencent à 1 alors que les index de tableau commencent à 0
  const product = productsData[parseInt(productId) - 1];

  // Insertion de la carte de détails du produit dans la section
  sectionCardDetails.innerHTML = ItemCardDetails(product);
}
