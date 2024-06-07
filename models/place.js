export class Place {
  constructor(titile, imageUri, location, id) {
    this.titile = titile;
    this.imageUri = imageUri;
    this.address = location.address;
    this.location = { lat: location.lat, lng: location.lng }; //{lat:number,lng:number}
    this.id = id;
  }
}
