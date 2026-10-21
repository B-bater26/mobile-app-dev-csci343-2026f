class Campground {
  constructor(id, countryId, name, avgerageCost, foundedYear, rating, description, imageUrl) {
    this.id = id;
    this.countryId = countryId;
    this.name = name;
    this.avgerageCost = avgerageCost;
    this.foundedYear = foundedYear;
    this.rating = rating;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  toString() {
    return `${this.name} was founded in ${this.foundedYear} - Average Cost: ${this.avgerageCost}, Rating: ${this.rating}`;
  }
}

export default Campground;




