<<<<<<< HEAD
document.getElementById("appointment-form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("form-message").innerText = "Your appointment request has been received!";
    this.reset();
});
=======
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    if (name == "" || email == "" || phone == "") {
        alert("All fields are required.");
        return false;
    }
    return true;
}
>>>>>>> Initial commit with website files
