//global scope function
var x = 5;
function add1() {
    document.write(562 + x + "<br>")
}
function add2() {
    document.write(x + 800)
}
add1();
add2();

document.write('<br/>')

//using console.log() to figure out error of x+800 still displaying to the screen
var x = 5;
function add1() {
    console.log(562 + x)
}
function add2() {
    console.log(x + 800)
}
add1();
add2();
//didn't change function name or variable

//local scope function
function add3() {
    var y = 5;
    document.write(562 + y + "<br>")
}
function add4() {
    document.write(y + 800)
}
add3();
add4();


//Method Assignment
function getTime() {
    if (new Date().getHours() < 12) { //checks what time it is
        document.getElementById("time").innerHTML = "It is before 12:00PM";
    }
}

//If Statement Assignment
function feedDog() {
    if (new Date().getHours() < 19) {
        document.getElementById("feeding time").innerHTML = "Yes!";
    }
}

//Else Statement Assignment
function elseFunction() {
    pizza = document.getElementById("pizza").value;
    if (pizza >= 3) {
        slices = "We have enough pizza!"
    }
    else { //if "if" statement is not true
        slices = "We need more slices!";
    }
    document.getElementById("pizzaSlices").innerHTML = slices;
}

//Else If Assignment
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { //if "if" statement is not true, a second condition to meet before general else statement answer
    Reply = "It is afternoon."
    }
    else { //if "if" and "else if" are not true
        Reply = "It is evening Time."
    }
    document.getElementById("Time_Of_Day").innerHTML = Reply;
}