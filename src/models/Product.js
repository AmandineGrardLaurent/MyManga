export default class Product {
  constructor(id, name, description, pictureURL, category, price, stock) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.pictureURL = pictureURL;
    this.category = category;
    this.price = price;
    this.stock = stock;
  }

  // Getters et setters

  getId() {
    return this.id;
  }

  setId(id) {
    this.id = id;
  }

  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }

  getDescription() {
    return this.description;
  }
  setDescription(description) {
    this.description = description;
  }

  getPictureURL() {
    return this.pictureURL;
  }
  setPictureURL(pictureURL) {
    this.pictureURL = pictureURL;
  }

  getCategory() {
    return this.category;
  }
  setCategory(category) {
    this.category = category;
  }

  getPrice() {
    return this.price;
  }
  setPrice(price) {
    this.price = price;
  }

  getStock() {
    return this.stock;
  }
  setStock(stock) {
    this.stock = stock;
  }

  toString() {
    return `${this.name} (${this.category}) - ${this.price} €`;
  }
}
