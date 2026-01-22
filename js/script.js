//? DOM ELEMENTS
const errorText = document.getElementById("error-text");
const errorAlert = document.getElementById("error-alert");
const loadingAlert = document.getElementById("loading-alert");
const emailCard = document.getElementById("email-list-card");
const emailList = document.getElementById("email-list");
const genMailBox = document.getElementById("gen-mail-box");
const numberInput = document.getElementById("number-input");
const genButton = document.getElementById("gen-button");

//? EVENTS
genMailBox.addEventListener("submit", handlegenerateMail);
