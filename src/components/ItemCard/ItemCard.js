export default function ItemCard(product) {
  return `
    <article class="container-card">
        <img src=${product.pictureURL} alt=${product.name} />
        <p>${product.name}</p>
        <p>${product.price}</p>
        <button class="addCartBtn" data-id="${product.id}">Ajouter au panier</button>
    </article>`;
}
