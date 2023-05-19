import GeolocationService from "./GeolocationService.js";

class EventListenerManager {
  constructor() {}

  register() {
    document.addEventListener("deviceready", this.#onDeviceReady(), false);
    document.addEventListener("click", this.#clickGeolocationButton());
  }

  #onDeviceReady() {

  }

  #clickGeolocationButton() {
    const geolocationService = new GeolocationService();
    geolocationService.getPosition();
  }
}

export default EventListenerManager;