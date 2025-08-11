/* ===== Poster Showcase Loader ===== */

// Array of poster data (public domain placeholders)
const posters = [
    {
        title: "Movie One",
        img: "assets/poster1.jpg",
        link: "https://www.imdb.com/"
    },
    {
        title: "Movie Two",
        img: "assets/poster2.jpg",
        link: "https://www.imdb.com/"
    },
    {
        title: "Movie Three",
        img: "assets/poster3.jpg",
        link: "https://www.imdb.com/"
    },
    {
        title: "Movie Four",
        img: "assets/poster4.jpg",
        link: "https://www.imdb.com/"
    }
];

// Load posters dynamically
const posterGrid = document.getElementById("posterGrid");

posters.forEach(poster => {
    const imgElement = document.createElement("img");
    imgElement.src = poster.img;
    imgElement.alt = poster.title;
    imgElement.addEventListener("click", () => {
        window.open(poster.link, "_blank");
    });
    posterGrid.appendChild(imgElement);
});

/* ===== Contact Form Submission (Google Sheets Placeholder) ===== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Get form values
    const formData = new FormData(contactForm);

    // ===== PLACEHOLDER =====
    // Replace with your Google Apps Script Web App URL after setup
    const scriptURL = "https://script.google.com/macros/s/AKfycby7RAblUN7NMTwQVWLA8StvvHYEvVlqw2gSkO5h9Ip8fuipmHALp0anBIijUzOlJR9www/exec";

    fetch(scriptURL, { method: "POST", body: formData })
        .then(response => {
            alert("Message sent successfully!");
            contactForm.reset();
        })
        .catch(error => {
            console.error("Error!", error.message);
            alert("There was an error sending your message.");
        });
});

