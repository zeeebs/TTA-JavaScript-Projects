//typeof for a string
document.write(typeof "Stonks Time!");

document.write('<br/>')

//type coercion assignment
document.write("Stonks Time!"+5);

document.write('<br/>')

//positiveinifinity
document.write(2E310);

document.write('<br/>')

//negative infinity
document.write(-2E310);

document.write('<br/>')

//boolean true
document.write(5>3);

document.write('<br/>')

//boolean false
document.write(5<3);

document.write('<br/>')

//console.log() function
console.log(2+2);

document.write('<br/>')

//console.log() function
console.log(5<3);

document.write('<br/>')

//comparison == true
document.write(5 == 5);

document.write('<br/>')

//comparison == false
document.write(10==5);

document.write('<br/>')

//comparison === true same type and value
x=5;
y=5;
document.write(x === y);

document.write('<br/>')

//comparison === false different type and value
r="5";
b=10;
document.write(r === b);

document.write('<br/>')

//comparison === false different type same value
h = "5";
j = 5;
document.write(h === j);

document.write('<br/>')

//comparison === false same type different value
a = "5";
z = "10";
document.write(a === z);

document.write('<br/>')

//AND operator true
document.write(10>8 && 8>3);

document.write('<br/>')

//AND operator false
document.write(10 < 8 && 8 > 3);

document.write('<br/>')

//OR operator true
document.write(10>8 || 3>8)

document.write('<br/>')

//OR operator false
document.write(10 < 8 || 3 > 8)

document.write('<br/>')


//not operator assignment

//NOT operator function false
function notFunction() {
    document.getElementById("not").innerHTML=!(500>3);
}

document.write('<br/>')

//NOT operator function true
function notnotFunction() {
    document.getElementById("notnot").innerHTML = !(500<3);
}
