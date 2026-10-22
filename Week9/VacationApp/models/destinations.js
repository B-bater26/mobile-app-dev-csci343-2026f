class Destination {
  constructor(id, countryId, name, avgerageCost, foundedYear, rating, description, imageUrl) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
    this.avgerageCost = avgerageCost;
    this.foundedYear = foundedYear;
    this.rating = rating;
    this.description = description;
    this.imageUrl = imageUrl;
    this.stringVal = `${this.name} was founded in ${this.foundedYear}\n Average Cost: $${this.avgerageCost}\n Rating: ${this.rating}/5`
  }

  toString() {
    return `${this.name} was founded in ${this.foundedYear} - Average Cost: $${this.avgerageCost}, Rating: ${this.rating}/5`;
  }
}

export default Destination;




