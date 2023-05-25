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

// Functions of Battery Status
function onBatteryStatus(status) {
  navigator.notification.alert("Level: " + status.level + " isPlugged: " + status.isPlugged);
}

function onBatteryLow(status) {
  navigator.notification.alert("Battery Level Low " + status.level + "%");
}

function onBatteryCritical(status) {
  navigator.notification.alert("Battery Level Critical " + status.level + "%\nRecharge Soon!");
}

// Fuctions of Device
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

// Functions of Camera
function clickCameraButton() {
  navigator.camera.getPicture(cameraSuccess, cameraError, { quality: 50 });
}

function cameraSuccess(imageData) {
  var body = document.querySelector("body");
  var img = document.createElement("img");
  img.src = "data:image/jpeg;base64," + imageData;
  body.appendChild(img);
}

function cameraError(message) {
  navigator.notification.alert("Failed because: " + message);
}

// Functions of Network Information
function clickNetworkInformationButton() {
  let networkState = navigator.connection.type;

  let states = {};
  states[Connection.UNKNOWN]  = 'Unknown connection';
  states[Connection.ETHERNET] = 'Ethernet connection';
  states[Connection.WIFI]     = 'WiFi connection';
  states[Connection.CELL_2G]  = 'Cell 2G connection';
  states[Connection.CELL_3G]  = 'Cell 3G connection';
  states[Connection.CELL_4G]  = 'Cell 4G connection';
  states[Connection.CELL]     = 'Cell generic connection';
  states[Connection.NONE]     = 'No network connection';

  navigator.notification.alert("Connection type: " + states[networkState]);
}

function onOffline() {
  navigator.notification.alert("The network connection was lost.");
}

// Functions of Screen Orientation
function clickLockButton() {
  screen.orientation.lock(screen.orientation.type);
}

function clickUnlockButton() {
  screen.orientation.unlock();
}

function clickOrientationInformationButton() {
  navigator.notification.alert(screen.orientation.type);
}

function orientationDidChange() {
  navigator.notification.alert("Orientation did change: " + screen.orientation.type);
}

// Functions of Inappbrowser
function clickInappbrowserButton(url) {
  const target = "_blank"
  const options = "location=no, hidden=yes"

  inAppBrowserRef = cordova.InAppBrowser.open(url, target, options);
  inAppBrowserRef.addEventListener("loadstart", loadStartCallBack);
  inAppBrowserRef.addEventListener("loadstop", loadStopCallBack);
  inAppBrowserRef.addEventListener("loaderror", loadErrorCallBack);
}

function loadStartCallBack() {
  $('#status-message').text("loading please wait ...");
}

function loadStopCallBack() {
  if (inAppBrowserRef != undefined) {
      inAppBrowserRef.show();
  }
}

function loadErrorCallBack(params) {
  $('#status-message').text("");
  var scriptErrorMesssage = 
    "alert('Sorry we cannot open that page. Message from the server is : " + 
    params.message + "');"

  inAppBrowserRef.executeScript({ code: scriptErrorMesssage }, executeScriptCallBack);
  inAppBrowserRef.close();
  inAppBrowserRef = undefined;
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

  // Event register of Camera
  const cameraButton = document.getElementById("camera");
  cameraButton.addEventListener("click", clickCameraButton);

  // Event register of Network Information
  document.addEventListener("offline", onOffline, false);

  const networkInformationButton = document.getElementById("network-information");
  networkInformationButton.addEventListener("click", clickNetworkInformationButton);

  // Event register of Screen Orientation
  const lockButton = document.getElementById("lock");
  const unlockButton = document.getElementById("unlock");
  const orientationInformationButton = document.getElementById("orientation-information");

  lockButton.addEventListener("click", clickLockButton);
  unlockButton.addEventListener("click", clickUnlockButton);
  orientationInformationButton.addEventListener("click", clickOrientationInformationButton);
  window.addEventListener("orientationchange", orientationDidChange);

  // Event register of Statusbar
  /* 
    scrollToTop 외에 기능이 필요없다면, 이 커스텀 이벤트 함수는 필요없음.
    config.xml - StatusBarDefaultScrollToTop의 value 속성을 true로 설정해주면 됨.
  */
  window.addEventListener("statusTap", function() {
    // Scroll fast
    // window.scrollTo(0, 0);
    
    navigator.notification.alert("Statusbar tapped.");

    function scrollToTopSlowly(duration) {
      let scrollHeight = window.scrollY;
      let scrollStep = Math.PI / (duration / 15);
      let cosParameter = scrollHeight / 2;
      let scrollCount = 0;
      let scrollMargin;

      let scrollInterval = setInterval(function() {
          if (window.scrollY != 0) {
              scrollCount = scrollCount + 1;
              scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
              window.scrollTo(0, (scrollHeight - scrollMargin));
          } else {
              clearInterval(scrollInterval);
          }
      }, 15);
    }

    scrollToTopSlowly(300);
  });

  // Event register of Inappbrowser
  const inappbrowserButton = document.getElementById("inappbrowser-btn");
  inappbrowserButton.addEventListener("click", function() {
    const input = document.getElementById("input-url");
    const url = input.value;
    input.value = "";
    clickInappbrowserButton(url)
  });

  // Event register of Vibration
  // This doesn't work in simulator.
  const vibrationButton = document.getElementById("vibration");
  vibrationButton.addEventListener("click", function() {
    navigator.vibrate(3000);
  });

  // Event register Custom plugin
  const customButton = document.getElementById("greet");
  customButton.addEventListener("click", function() {
    cordova.exec(
      function(winParam) {
        navigator.notification.alert(winParam, null, "Received message", "OK");
      }, 
      function(error) {
        navigator.notification.alert("Error occured!: " + error);
      }, 
      "CordovaSamplePluginSwift", 
      "greet"
    );
  })

  const modalButton = document.getElementById("modal");
  modalButton.addEventListener("click", function() {
    cordova.exec(
      function(winParam) {
        navigator.notification.alert(winParam, null, "Received message", "OK");
      }, 
      function(error) {
        navigator.notification.alert("Error occured!: " + error);
      }, 
      "CordovaSamplePluginSwift", 
      "presentModalView"
    );
  })
}

document.addEventListener("deviceready", onDeviceReady, false);
let inAppBrowserRef;