function switchFunction() {
    var animalOutput;
    var animal = document.getElementById("animalInput").value;
    var animal_string = " are great animals!";
    switch (animal) {
        case "Dog":
            animalOutput = "Dogs" + animal_string;
            break;
        case "Cat":
            animalOutput = "Cats" + animal_string;
            break;
        case "Cow":
            animalOutput = "Cows" + animal_string;
            break;
        case "Turtle":
            animalOutput = "Turtles" + animal_string;
            break;
        case "Bunny":
            animalOutput = "Bunnys" + animal_string;
            break;
        default:
            animalOutput = "Please enter an animal exactly as written in the list above."
    }
    document.getElementById("output").innerHTML = animalOutput;
}