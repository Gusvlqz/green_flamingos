document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ script.js loaded");

    // --- Poster Grid ---
    const posterGrid = document.getElementById("posterGrid");
    if (posterGrid) {
        const posters = [
            { img: "assets/Dark_Winds.jpg", link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i" },
            { img: "assets/Little_Voice.jpg", link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i" },
            { img: "assets/Morko_Mali.jpg", link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i" },
            { img: "assets/P_Valley.jpg", link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i" }
        ];

        posters.forEach(poster => {
            const a = document.createElement("a");
            a.href = poster.link;
            a.target = "_blank";
            a.rel = "noopener noreferrer";

            const img = document.createElement("img");
            img.src = poster.img;
            img.alt = "Movie Poster";
            img.onerror = () => {
                console.error("Image failed to load:", poster.img);
                img.src = "https://via.placeholder.com/300x450?text=No+Image";
            };

            a.appendChild(img);
            posterGrid.appendChild(a);
        });
    }

    // --- Burger Menu ---
    const burger = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    burger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        burger.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            burger.classList.remove('active');
        });
    });
});
