class News {
    constructor(
      id,
      category,
      headline,
      date,
      author,
      agency,
      desc,
      imageUrl,
    ) {
      this.id = id;
      this.category = category;
      this.headline = headline;
      this.date = date;
      this.author = author;
      this.agency = agency;
      this.desc = desc;
      this.imageUrl = imageUrl;
    }
  
    toString() {
      return `${this.type} at ${this.address}, ${this.city}, ${this.state} ${this.zipCode} - Price: $${this.price} - Bedrooms: ${this.bedrooms} - Bathrooms: ${this.bathrooms} - Square Feet: ${this.squareFeet} - Year Built: ${this.yearBuilt} - Description: ${this.description} - Image URL: ${this.imageUrl}`;
    }
  }
  
  export default News;
  