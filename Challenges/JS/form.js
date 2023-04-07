function validateForm() {
    let p = document.forms["form"]["phone"].value;
    if (p == "") {
        alert("Please add a phone number");
        return false;
    }
}

