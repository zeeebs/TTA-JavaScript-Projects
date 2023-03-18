function dictionaryFunction() {
    var Game = {
        Type:"Video",
        Style: "Handheld",
        Brand: "Nintendo",
        Memory: "256 GB",
        Color: "Black, Red, & Blue"
    };
    delete Game.Brand
    document.getElementById("dictionary").innerHTML = Game.Brand;
}