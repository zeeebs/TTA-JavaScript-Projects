//Utilize JavaScript to make the browser display NaN.
function nanFunction1() {
    document.getElementById("nan1").innerHTML = 0 / 0
}

//Utilize the isNaN() function to make the browser display “true.”
function nanFunction2() {
    document.getElementById("nan2").innerHTML = isNaN("string")
}

//Utilize the isNaN() function to make the browser display “false.”
function nanFunction3() {
    document.getElementById("nan3").innerHTML = isNaN("555")
}