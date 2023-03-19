//concat() method assignment
function concatFunction() {
    var part1 = "Concatenating is kind of like ";
    var part2 = "addition, but with words.";
    var wholeSentence = part1.concat(part2);
    document.getElementById("concat").innerHTML = wholeSentence;
}

//slice() method assignment
function sliceFunction() {
    var sentence = "Slice Method Assignment"
    var section = sentence.slice(6,12);
    document.getElementById("slice").innerHTML = section;
}

//numbers method assignment
function stringFunction() {
    var x = 42;
    document.getElementById("string").innerHTML = x.toString()
}

//toPrecision() M=method assignment
function precisionFunction() {
    var a = 3.14159265;
    document.getElementById("precision").innerHTML = a.toPrecision(5)
}