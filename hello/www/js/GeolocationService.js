class GeolocationService {
  constructor() {}

  getPosition() {
      navigator.geolocation.getCurrentPosition(this.#onGeolocationSuccess.bind(this), this.#onGeoLocationError.bind(this));
  }
  
  // Private. Completion handler
  #onGeolocationSuccess(position) {
      this.#logSuccess(position);
      alert(`latitude: ${position.coords.latitude} \nlongitude: ${position.coords.longitude}`);
  }
  
  #onGeoLocationError(error) {
      this.#logError(error);
  }

  // Private. Log
  #logSuccess(position) {
    console.log("navigator.geolocation works well");
    console.log(position);
  }

  #logError(error) {
    alert("code: " + error.code + "\n" + "message: " + error.message + "\n");
  }
}

export default GeolocationService; // export class