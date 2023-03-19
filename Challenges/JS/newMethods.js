//toFixed() method 
function fixedFunction() {
    let num = 3.14159265;
    let n = num.toFixed(3);
    document.getElementById("fixed").innerHTML = n;
}

//valueOf() method
function valueFunction() {
    let string = "Hello World!";
    let result = string.valueOf()
    document.getElementById("value").innerHTML = result;
}