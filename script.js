// Dynamically load placeholder posters
const posters = [
    img: "poster1.jpg","https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i?text=Movie+1",
    "https://via.placeholder.com/300x450.png?text=Movie+2",
    "https://via.placeholder.com/300x450.png?text=Movie+3",
    "https://via.placeholder.com/300x450.png?text=Movie+4",
    "https://via.placeholder.com/300x450.png?text=Movie+5",
    "https://via.placeholder.com/300x450.png?text=Movie+6"
];

const posterGrid = document.getElementById("posterGrid");
posters.forEach(url => {
    const link = document.createElement("a");
    link.href = "https://www.imdb.com/";
    link.target = "_blank";
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Movie Poster";
    link.appendChild(img);
    posterGrid.appendChild(link);
});

// Contact form submission
const contactForm = document.getElementById("contactForm");
const submitBtn = contactForm.querySelector("button");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    submitBtn.disabled = true;

    const scriptURL = "YOUR_GOOGLE_SHEETS_SCRIPT_URL"; // Replace with your actual script URL

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
        console.error("Error!", error);
        alert("There was an error sending your message.");
    })
    .finally(() => {
        submitBtn.disabled = false;
    });
});

