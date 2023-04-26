function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var bmi = weight / ((height/100) * (height/100));
  bmi = bmi.toFixed(2);
  var result = document.getElementById("result");
  if (isNaN(bmi)) {
    result.innerHTML = "Please enter valid inputs!";
  } else {
    result.innerHTML = "Your BMI is " + bmi + ". ";
    if (bmi < 18.5) {
      result.innerHTML += "You are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.innerHTML += "You are normal weight.";
    } else if (bmi >= 25 && bmi <= 29.9) {
      result.innerHTML += "You are overweight.";
    } else {
      result.innerHTML += "You are obese.";
    }
  }
}
