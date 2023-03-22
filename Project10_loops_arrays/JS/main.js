//while loop
function whileFunction() {
    var count = "";
    var c = 1;
    while (c<6) {
        count += "<br>" + c; //br allows for line breaks between numbers
        c++; //add one to the variable c
    }
    document.getElementById("while").innerHTML = count;
}

//for loop
var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
var content = "";
var x;
function forFunction() {
    for (x=0; x < colors.length; x++) { //for the entire list, list all until the end
        content += colors[x] + "<br>";
    }
    document.getElementById("for").innerHTML = content;
}

//document.getElementById.innerHTML Assignment
function arrayFunction() {
    var primaryColors=[];
    primaryColors[0]= "red";
    primaryColors[1] = "blue";
    primaryColors[2] = "yellow";
    document.getElementById("array").innerHTML = "Of the three primary colors, " + primaryColors[2] + " is my favorite.";
}

//const keyword assignment
function constantFunction() {
    const game = {type:"video game", brand:"Nintendo", name:"Switch"};
    game.type = "handheld video game console";
    game.price = "$300";
    document.getElementById("constant").innerHTML = "The cost of the " + game.type + " was " + game.price;
}

//let keyword assignment
function letFunction() {
    var v = "function scope";
    document.write("<br>" + v);
    {
        let v = "block scope"  //v only means "block scope" within the {}
        document.write("<br>" + v);
    }
    document.write("<br>" + v)
}

function objectFunction() {
    let bottle = {
        brand: "Owala",
        colors: "orange, green, purple, and dark blue",
        capacity: "40oz",
        description : function() {
            return "My " + this.brand + " water bottle is " + this.colors + " and holds " + this.capacity + "."
        }
    };
    document.getElementById("object").innerHTML = bottle.description();
}