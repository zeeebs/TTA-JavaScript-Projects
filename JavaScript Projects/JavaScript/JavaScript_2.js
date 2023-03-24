function validateForm() {
    let x = document.forms["validation"]["fname"].value;
    if (x == "") {
        alert("Please provide your first and last name.");
        return false;
    }
}