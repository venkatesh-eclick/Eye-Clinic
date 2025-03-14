document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("form-message").textContent = "Thank you for booking an appointment!";
});