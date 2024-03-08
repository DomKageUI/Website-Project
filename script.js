document.addEventListener('DOMContentLoaded', function() {
    var name = prompt("Welcome! Please enter your name:");
    if (name !== null && name !== "") {
        alert("Hello, " + name + "! Welcome to Faze Clan.");
    } else {
        alert("Welcome to Faze Clan.");
    }

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        if (email === "" || message === "") {
            document.getElementById("errorMessage").textContent = "Please fill out all fields.";
        } else {
            var subject = "Message from Faze Clan";
            var randomNumber = Math.floor(Math.random() * 10000) + 1;
            subject += " #" + randomNumber;
            var body = "Email: " + email + "\n\nMessage: " + message;
            var mailtoLink = "mailto:Dombuckner19@gmail.com cc= subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
            window.location.href = mailtoLink;
            document.getElementById("contactForm").innerHTML = "<p>Thank you for your message!</p><button onclick='returnToHomepage()'>Return to Homepage</button>";
            setTimeout(returnToHomepage, 5000);
        }
    });
});

function returnToHomepage() {
    window.location.href = "index.html";
}
