document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ script.js loaded");

    const posterGrid = document.getElementById("posterGrid");
    if (!posterGrid) {
        console.error("❌ No element with ID 'posterGrid' found!");
        return;
    }

    const posters = [
        { img: "assets/Dark_Winds.jpg", link: "https://www.imdb.com/title/tt15017118/" },
        { img: "assets/Little_Voice.jpg", link: "https://www.imdb.com/title/tt15017118/" },
        { img: "assets/Morko_Mali.jpg", link: "https://www.imdb.com/title/tt15017118/" },
        { img: "assets/P_Valley.jpg", link: "https://www.imdb.com/title/tt15017118/" }
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

    // Burger menu toggle
    const burger = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');

    burger.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
});
