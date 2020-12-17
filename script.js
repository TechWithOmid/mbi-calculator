/*how it work!
BMI Categories:
Underweight = <18.5
Normal weight = 18.5–24.9
Overweight = 25–29.9
Obesity = BMI of 30 or greater*/

// Varibles
const bmiResult = document.querySelector("#bmi-result"); // result
const result = document.querySelector("#final-result"); // result info
// weight and height input
let bfrom = document.querySelector("#bform");

// EventListners
eventListners();
function eventListners() {
  // add event listner to form button
  bfrom.addEventListener("submit", calcularBMI);
  document.querySelector("#reset-btn").addEventListener("click", reset);
}

// Funtions

// calculator function
function calcularBMI(e) {
  e.preventDefault();

  const weight = document.querySelector("#weight-form").value;
  const height = document.querySelector("#height-form").value;
  const mbi = weight / (height / 100) ** 2;
  bmiResult.value = mbi;

  if (mbi < 18.5) {
    console.log("Under weight");
    result.value = "Your Under Weight";
  } else if ((mbi > 18.5) & (mbi <= 24.9)) {
    console.log("Normal wieght");
    result.value = "Your Normal Wieght";
  } else if ((mbi > 25) & (mbi <= 29.9)) {
    console.log("Over Weight");
  } else if (mbi > 30) {
    result.value = "Your Obesity";
    console.log("Obesity");
  }
}

// reset button
function reset(e) {
  e.preventDefault();
  bfrom.reset();
  bmiResult.value = " ";
  result.value = " "
}
