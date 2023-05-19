import GeolocationService from "./GeolocationService.js";

class EventListenerManager {
  constructor() {}

  register() {
    document.addEventListener("deviceready", this.#onDeviceReady(), false);
    window.addEventListener("batterystatus", this.#onBatteryStatus, false);
    window.addEventListener("batterylow", this.#onBatteryLow, false);
    window.addEventListener("batterycritical", this.#onBatteryCritical, false);
    this.#registerButtonClickEvent();
  }

  #registerButtonClickEvent() {
    document.addEventListener("click", this.#clickGeolocationButton());
    document.addEventListener("click", this.#clickBatteryStatusButton());
  }

  // Device ready event
  #onDeviceReady() {

  }

  // Battery event
  #onBatteryStatus(status) {
    console.log("Level: " + status.level + " isPlugged: " + status.isPluged);
  }

  #onBatteryLow(status) {
    alert("Battery Level Low " + status.level + "%");
  }

  #onBatteryCritical(status) {
    alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
  }

  // Geolocation event
  #clickGeolocationButton() {
    const geolocationService = new GeolocationService();
    geolocationService.getPosition();
  }
}

export default EventListenerManager;