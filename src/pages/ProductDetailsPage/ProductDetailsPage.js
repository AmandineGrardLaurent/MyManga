import ItemCardDetails from "../../components/ItemCardDetails/ItemCardDetails.js";

export function ProductDetailsPage(productId, homepageContainer, productsData) {
  homepageContainer.innerHTML = `
    <section id="products-details"></section>
  `;

  const sectionCardDetails = document.getElementById("products-details");

  sectionCardDetails.classList.add(
    "row",
    "row-cols-1",
    "row-cols-sm-2",
    "row-cols-md-3",
    "g-3",
    "mb-3",
  );

  sectionCardDetails.innerHTML = ItemCardDetails(
    productsData[parseInt(productId) - 1],
  );
}
