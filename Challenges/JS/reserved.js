//Assign a variable the value of a reserved word. 
//Attempt to display this in the browser.
var  x = this;
document.write(x)

//object constructor function

function Sandwhich(Bread, Meat, Cheese, Condiments) {
    this.Sandwhich_Bread = Bread
    this.Sandwhich_Meat = Meat
    this.Sandwhich_Cheese = Cheese
    this.Sandwhich_Condiments = Condiments
}

var sub = new Sandwhich("Sourdough", "Turkey", "Provolone", "Mayo, Mustard, and Pesto");

function obconFunction() {
    document.getElementById("sub").innerHTML = "The deli's most popular sandwhich is " + sub.Sandwhich_Meat + " and " + sub.Sandwhich_Cheese + " with " + sub.Sandwhich_Condiments + " on " + sub.Sandwhich_Bread + " bread.";
}