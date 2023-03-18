//ternary operator voting age function
function voteFunction() {
    var age, canVote;
    age = document.getElementById("age").value;
    canVote = (age < 18) ? "You are not old enough to" : "You can";
    document.getElementById("vote").innerHTML = canVote + " vote!";
}