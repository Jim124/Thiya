export class Place {
  constructor(titile, imageUri, location) {
    this.id = new Date().toString() + Math.random().toString();
    this.titile = titile;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng }; //{lat:number,lng:number}
  }
}
