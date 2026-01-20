export default function ItemCard(product) {
  return `
    <section class="container-card">
        <img src=${product.pictureURL} alt=${product.name} />
        <p>${product.name}</p>
        <p>${product.price}</p>
        <button id="addCartBtn" data-id="${product.id}">Ajouter au panier</button>
    </section>`;
}
