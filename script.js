document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value
    };

    fetch("https://script.google.com/macros/s/AKfycbyzqSI3-6mGjSGdO0AJE7K-tIpTsFcXe8UcM27uWnVzQHNk1_fYXrDj0TrKM4C5OKTO/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    }).then(() => {
        document.getElementById("confirmation").innerText = "Booking recorded!";
    });
});