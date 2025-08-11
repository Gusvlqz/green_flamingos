const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
const submitBtn = contactForm.querySelector("button[type='submit']");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Disable button & add spinner
    submitBtn.disabled = true;
    const originalBtnText = submitBtn.textContent;
    submitBtn.innerHTML = `<span class="spinner"></span> Sending...`;

    const scriptURL = "YOUR_GOOGLE_SHEETS_SCRIPT_URL"; // Replace with your Web App URL

    fetch(scriptURL, {
        method: "POST",
        body: new FormData(contactForm)
    })
    .then(response => {
        if (response.ok) {
            // Hide form, show success message
            contactForm.classList.add("hidden");
            formSuccess.classList.remove("hidden");
            contactForm.reset();

            // After 5 seconds, fade back to form
            setTimeout(() => {
                formSuccess.classList.add("hidden");
                contactForm.classList.remove("hidden");
            }, 5000);
        } else {
            alert("Error sending message. Please try again.");
        }
    })
    .catch(error => {
        console.error("Error!", error.message);
        alert("There was an error sending your message.");
    })
    .finally(() => {
        // Restore button state for errors only
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
    });
});
