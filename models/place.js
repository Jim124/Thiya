class Place {
  constructor(titile, imageUri, address, location) {
    this.id = new Date().toString() + Math.random().toString();
    this.titile = titile;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location; //{lat:number,lng:number}
  }
}
