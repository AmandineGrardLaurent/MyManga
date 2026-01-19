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

  // Méthode pour récupérer le nom entier
  getFullname() {
    return this.firstname + " " + this.lastname;
  }

  // Méthode d'affichage d'un client
  toString() {
    return `Customer n°${this.id} : ${this.firstname} ${this.lastname}`;
  }
}
