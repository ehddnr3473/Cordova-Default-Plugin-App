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

// Device Ready
document.addEventListener('deviceready', function() {
  onDeviceReady()
}, false);

function onDeviceReady() {
    
}

// Event register of Dialogs
const alertButton = document.getElementById("alert");
alertButton.addEventListener("click", clickAlertButton);

const confirmButton = document.getElementById("confirm");
confirmButton.addEventListener("click", clickConfirmButton);

const promptButton = document.getElementById("prompt");
promptButton.addEventListener("click", clickPromptButton);

const beepButton = document.getElementById("beep");
beepButton.addEventListener("click", clickBeepButton);