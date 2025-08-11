   document.addEventListener("DOMContentLoaded", function () {
    // Movie posters with IMDb links
    const posters = [
        { 
            img: "https://via.placeholder.com/300x450.png?text=Movie+1", 
            link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i"
        },
        { 
            img: "https://via.placeholder.com/300x450.png?text=Movie+2", 
            link: "https://www.imdb.com/title/tt7654321/"
        },
        { 
            img: "https://via.placeholder.com/300x450.png?text=Movie+3", 
            link: "https://www.imdb.com/title/tt2345678/"
        },
        { 
            img: "https://via.placeholder.com/300x450.png?text=Movie+4", 
            link: "https://www.imdb.com/title/tt8765432/"
        }
    ];

    // Target the poster grid
    const posterGrid = document.getElementById("posterGrid");

    // Loop through posters and add them to the grid
    posters.forEach(poster => {
        const link = document.createElement("a");
        link.href = poster.link;
        link.target = "_blank";

        const img = document.createElement("img");
        img.src = poster.img;
        img.alt = "Movie Poster";

        link.appendChild(img);
        posterGrid.appendChild(link);
    });

    // Contact form logic
    const contactForm = document.getElementById("contactForm");
    const submitBtn = contactForm.querySelector("button");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        submitBtn.disabled = true;

        const scriptURL = "YOUR_GOOGLE_SHEETS_SCRIPT_URL"; // Replace with your actual Google Apps Script URL

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
});
