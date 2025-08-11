const contactForm = document.getElementById("contactForm");
const submitBtn = contactForm.querySelector("button[type='submit']");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Disable button & change text to prevent double clicks
    submitBtn.disabled = true;
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";

    const scriptURL = "YOUR_GOOGLE_SHEETS_SCRIPT_URL"; // Replace with your URL

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
        // Restore button state after send (even on error)
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    });
});
