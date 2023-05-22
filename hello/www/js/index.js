// Functions of Dialogs
function clickAlertButton() {
  navigator.notification.alert("Hello World!", null, "Alert", "Done");
}

function clickConfirmButton() {
  navigator.notification.confirm(
    "You are the winner!", 
    onConfirm, 
    "Game Over", 
    ["Restart", "Exit"]
  );
}

function onConfirm(buttonIndex) {
  alert("You selected button " + buttonIndex);
}

function clickPromptButton() {
  navigator.notification.prompt(
    "Please enter your name", 
    onPrompt, 
    "Registration", 
    ["OK", "Exit"], 
    "Yeolmok"
  );
}

function onPrompt(results) {
  alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
}

function clickBeepButton() {
  navigator.notification.beep(2);
}

// Functions of Geolocation
function clickGeolocationButton() {
  navigator.geolocation.getCurrentPosition(onGeolocationSuccess, onGeoLocationError);
}

function onGeolocationSuccess(position) {
  navigator.notification.alert(`latitude: ${position.coords.latitude} \nlongitude: ${position.coords.longitude}`);
}

function onGeoLocationError(error) {
  navigator.notification.alert("code: " + error.code + "\n" + "message: " + error.message + "\n");
}

// Function of Battery Status
function onBatteryStatus(status) {
  navigator.notification.alert("Level: " + status.level + " isPlugged: " + status.isPluged);
}

function onBatteryLow(status) {
  navigator.notification.alert("Battery Level Low " + status.level + "%");
}

function onBatteryCritical(status) {
  navigator.notification.alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
}

// Fuction of Device
function clickCordovaButton() {
  navigator.notification.alert(device.cordova);
}

function clickPlatformButton() {
  navigator.notification.alert(device.platform);
}

function clickModelButton() {
  navigator.notification.alert(device.model);
}

function clickUUIDButton() {
  navigator.notification.alert(device.uuid);
}

function clickVersionButton() {
  navigator.notification.alert(device.version);
}

function clickManufacturerButton() {
  navigator.notification.alert(device.manufacturer);
}

function clickIsVirtualButton() {
  navigator.notification.alert(device.isVirtual);
}

function clickSerialButton() {
  navigator.notification.alert(device.serial);
}

// Device Ready
function onDeviceReady() {
  // Event register of Dialogs
  const alertButton = document.getElementById("alert");
  alertButton.addEventListener("click", clickAlertButton);

  const confirmButton = document.getElementById("confirm");
  confirmButton.addEventListener("click", clickConfirmButton);

  const promptButton = document.getElementById("prompt");
  promptButton.addEventListener("click", clickPromptButton);

  const beepButton = document.getElementById("beep");
  beepButton.addEventListener("click", clickBeepButton);

  // Event register of Geolocation
  const geolocationButton = document.getElementById("geolocation");
  geolocationButton.addEventListener("click", clickGeolocationButton);

  // Event register of Battery Status
  window.addEventListener("batterystatus", onBatteryStatus, false);
  window.addEventListener("batterylow", onBatteryLow, false);
  window.addEventListener("batterycritical", onBatteryCritical, false);

  // Event register of Device
  const cordovaButton = document.getElementById("device-cordova");
  const modelButton = document.getElementById("device-model");
  const platformButton = document.getElementById("device-platform");
  const uuidButton = document.getElementById("device-uuid");
  const versionButton = document.getElementById("device-version");
  const manufacturerButton = document.getElementById("device-manufacturer");
  const isVirtualButton = document.getElementById("device-is-virtual");
  const serialButton = document.getElementById("device-serial");

  cordovaButton.addEventListener("click", clickCordovaButton);
  modelButton.addEventListener("click", clickModelButton);
  platformButton.addEventListener("click", clickPlatformButton);
  uuidButton.addEventListener("click", clickUUIDButton);
  versionButton.addEventListener("click", clickVersionButton);
  manufacturerButton.addEventListener("click", clickManufacturerButton);
  isVirtualButton.addEventListener("click", clickIsVirtualButton);
  serialButton.addEventListener("click", clickSerialButton);
}

document.addEventListener('deviceready', onDeviceReady, false);