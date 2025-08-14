document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ script.js loaded");

    // --- Poster Grid ---
    const posterGrid = document.getElementById("posterGrid");
    if (posterGrid) {
        const posters = [
            { img: "assets/Westworld.jpg", link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i" },
            { img: "assets/Dark_Winds.jpg", link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i" },
            { img: "assets/The_Walking_Dead_Dead_City.jpg", link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i" },
            { img: "assets/The_Gilded_Age.jpg", link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i" },
            { img: "assets/The_Righteous_Gemstones.jpg", link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i" },
            { img: "assets/The_Plot_Against_America.jpg", link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i" },
            { img: "assets/Unbreakable_Kim_Schmidt.jpg", link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i" },
            { img: "assets/Power_Book_Ghost.jpg", link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i" },
            { img: "assets/Little_Voice.jpg", link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i" },
            { img: "assets/Power_Book_Raising_Kanan 2021.jpg", link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i" },
            { img: "assets/P_Valley.jpg", link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i" },
            { img: "assets/Solteras.jpg", link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i" },
            { img: "assets/Pequenos_Heroes.jpg", link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i" },
            { img: "assets/Morko_Mali.jpg", link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i" }
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
    
    // Trigger reflow so animation runs
    requestAnimationFrame(() => {
        img.style.opacity = "1";
    });

    

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


// Fade-in posters when they scroll into view
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // stops watching after fade-in
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".poster-grid img").forEach(img => {
        observer.observe(img);
    });
});

