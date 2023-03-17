//addition function
function additionFunction() {
    var addition = 5+5;
    document.getElementById("add") //document.getElementByID() goes inside {}
        .innerHTML = "5+5="+addition;
}

//subtraction function
function subtractionFunction() {
    var subtraction = 13-7;
    document.getElementById("sub")
        .innerHTML = "13-7=" + subtraction;
}

//multiplication function
function multiplyFunction() {
    var simple_Math = 5*9;
    document.getElementById("multiply") 
        .innerHTML = "5*9=" + simple_Math;
}

//division function
function divisionFunction() {
    var simple_Math = 100/10;
    document.getElementById("division")
        .innerHTML = "100/10=" + simple_Math;
}

//add, subtraction, multiply, & divide function
function asmdFunction() {
    var simple_Math = (4+6)*3/3-1;
    document.getElementById("asmd")
        .innerHTML = "4 plus 6, multiplied by 3, divided by 3 and then subtracted by 1 equals " + simple_Math;
}

//modulus function
function modulusFunction() {
    var simple_Math = 25%6;
    document.getElementById("mod")
        .innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}

//negation 
function negationFunction() {
    var x=5;
    document.getElementById("neg")
        .innerHTML = -x;
}

//increment
var x=10;
x++;
document.write(x);

document.write('<br/>');

//decrement
var x = 10;
x--;
document.write(x);

document.write('<br/>');

//random number between 0 and 1
window.alert(Math.random())

//random number between 0 and 100
window.alert(Math.random()+100)

//math challenge
document.write(Math.sqrt(64)+"<br/>")