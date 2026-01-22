// Classe Customer
// Représente un client de l'application
// Elle encapsule les informations de base liées à un client
class Customer {
  constructor(id, firstname, lastname) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
  }

  // getters et setters

  getFirstname() {
    return this.firstname;
  }

  setFirstname(firstname) {
    this.firstname = firstname;
  }

  getLastname() {
    return this.lastname;
  }

  setLastname(lastname) {
    this.lastname = lastname;
  }

  // Retourne le nom complet du client (prénom + nom)
  getFullname() {
    return this.firstname + " " + this.lastname;
  }

  // Retourne une représentation textuelle du client
  toString() {
    return `Customer n°${this.id} : ${this.firstname} ${this.lastname}`;
  }
}
