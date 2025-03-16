document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value
    };

    fetch("hhttps://script.google.com/macros/s/AKfycbxq2My3duJZxXq8dagfVIA9pDjPCJ75BoN1qefHcDKPBF0oHnEbD5OgQEKRpj2KJf-D/exec", {
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
