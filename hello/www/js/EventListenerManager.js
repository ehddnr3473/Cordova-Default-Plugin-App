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

  // Device ready event
  #onDeviceReady() {
    
  }

  #registerButtonClickEvent() {
    const geolocationButton = document.getElementById("geolocation");
    geolocationButton.addEventListener("click", this.#clickGeolocationButton);

    const deviceButton = document.getElementById("device");
    deviceButton.addEventListener("click", this.#clickDeviceButton);
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

  #clickDeviceButton() {
    alert(`${device.cordova}
    \n${device.model}
    \n${device.platform}
    \n${device.uuid}
    \n${device.version}
    \n${device.manufacturer}
    \n${device.isVirtual}
    \n${device.serial}`);
  }

  // Geolocation event
  #clickGeolocationButton() {
    const geolocationService = new GeolocationService();
    geolocationService.getPosition();
  }
}

export default EventListenerManager;