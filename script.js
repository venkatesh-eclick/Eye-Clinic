document.getElementById("appointment-form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("form-message").innerText = "Your appointment request has been received!";
    this.reset();
});
