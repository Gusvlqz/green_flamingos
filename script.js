/* ===== Contact Form Submission (Google Sheets Ready) ===== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Replace with your own Web App URL from Google Apps Script
    const scriptURL = "https://script.google.com/macros/s/AKfycbytte9kleGK1y5ePQkXWyTYDjJN4J4nqN7S1raqs5F0TL6vxWo4ucasxE49lQJXN07msA/exec";

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(contactForm)
    })
    .then(response => {
        if (response.ok) {
            alert("Message sent successfully!");
            contactForm.reset();
        } else {
            alert("Error sending message. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error!", error.message);
        alert("There was an error sending your message.");
    });
});
