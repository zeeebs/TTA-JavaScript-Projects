//use a break statement
function breakFunction() {
    let brk = "";
    for (let i=0; i<15; i++) { //i initially equals 0, if i is less than 15, add one more to i
        if (i===5) {break;} //if i equals 5, break out of loop
        brk += i +"<br>";
    }
document.getElementById("break").innerHTML = brk
}

//use the continue function
function continueFunction() {
    let cont = "";
    for (let j = 0; j < 15; j++) { //j initially equals 0, if j is less than 15, add one more to j
        if (j === 5) { continue; } //if j equals 5, skip that iteration of the loop and continue on with the next
        cont += j + "<br>";
    }
    document.getElementById("continue").innerHTML = cont
}