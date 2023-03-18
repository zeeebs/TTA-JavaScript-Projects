//ternary operator function
function rideFunction() {
    var height, canRide;
    height = document.getElementById("height").value;
    canRide = (height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById("ride").innerHTML = canRide + " to ride";
}

//Keyword "this" function

//class Vehicle constuctor function
function Vehicle(Make, Model, Year, Color) { //constructor, setting default parameters for vehicle class
    this.Vehicle_Make = Make //constructor place holders for when an instance of Vehicle is made
    this.Vehicle_Model = Model
    this.Vehicle_Year = Year
    this.Vehicle_Color = Color
}
//new instances of Vehicle class
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

//function to call to print to screen
function thisFunction() {
    document.getElementById("keywords_and_constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}


//New Keyword Assignment

//class function
function Pet(Species, Name, Age) {
    this.Pet_Species = Species
    this.Pet_Name = Name
    this.Pet_Age = Age
}
//new instances of Pet class
var Gabriel = new Pet("Dog", "Vlad", "11");
var Zella = new Pet("Cat", "Ripper", "10 month")
var Zabe = new Pet("Bearded Dragon", "Axel", "5");
//function to call
function newFunction() {
    document.getElementById("New_and_This").innerHTML = "Zella has a " + Zella.Pet_Age + " old " + Zella.Pet_Species + " named " + Zella.Pet_Name;
}

//Nested Function Assignment

function nestedFunction() {
    document.getElementById("counting").innerHTML = count();
    function count() {
        var starting_point = 9;
        function plus_one() {starting_point += 1;}
        plus_one();
        return starting_point;
    }
}