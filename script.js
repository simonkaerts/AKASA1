document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (name && email && date && time) {
        document.getElementById("confirmation").innerText = 
            `Thank you, ${name}! Your yoga lesson is booked for ${date} at ${time}.`;
        this.reset(); // Clear form after submission
    } else {
        document.getElementById("confirmation").innerText = "Please fill out all fields.";
    }
});
