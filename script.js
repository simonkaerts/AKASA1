document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value
    };

    fetch("https://script.google.com/macros/s/AKfycbwo46DhvOPJtdaZKUjn8HSYwDu6NMxU31y3vIoCym-J5ca5Q43Taqay3uSszuy8Rvk6/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(response => response.text())
    .then(data => {
        console.log("Server Response:", data); // Check the response in DevTools Console
        document.getElementById("confirmation").innerText = "Booking recorded!";
    })
    .catch(error => console.error("Error:", error));
});
