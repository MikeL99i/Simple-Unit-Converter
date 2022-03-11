// variable declaration
// UserInput
const inputEl = document.getElementById("user-input")
let inputString = inputEl.value
console.log(inputString)

// Converting Units
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

// Conversion funtions
// Length function convert meter/feet
function lenghtConversion() {
   let meter = inputString / 3.28084;
   let feet = inputString * 3.28084;
   lengthEl.textContent = inputString + " meters = " + feet.toFixed(3) + " feet | " + inputString + " feet = " + meter.toFixed(3) + " meters";
}

// Volume function convert Liters/Gallons
function volumeConversion() {
    let liters = inputString * 3.78541;
    let gallons = inputString / 3.78541;
    volumeEl.textContent = inputString + " liters = " + gallons.toFixed(3) + " gallons | " + inputString + " gallons = " + liters.toFixed(3) + " liters";
}

// Mass function convert Killogrrams/Pounds
function massConversion() {
    let pounds = inputString *  2.20462;
    let kilos = inputString /  2.20462;
    massEl.textContent = inputString + " kilos = " + pounds.toFixed(3) + " pounds | " + inputString + " pounds = " + kilos.toFixed(3) + " kilos";
    
}

// Output Conversion
function conversion() {
    inputString = inputEl.value
    lenghtConversion()
    volumeConversion()
    massConversion()
}



function hello() {
    lengthEl.textContent = "Hello World"
}