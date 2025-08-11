const contactForm = document.getElementById("contactForm");
const submitBtn = contactForm.querySelector("button[type='submit']");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent page reload

    submitBtn.disabled = true;

    const scriptURL = "YOUR_GOOGLE_SHEETS_SCRIPT_URL"; // Replace with actual script URL

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
    })
    .finally(() => {
        submitBtn.disabled = false;
    });
});
