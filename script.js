document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ script.js loaded");

    const posterGrid = document.getElementById("posterGrid");
    if (!posterGrid) {
        console.error("❌ No element with ID 'posterGrid' found!");
        return;
    }

    const posters = [
  {
    title: "Movie 1",
    img: "assets/Dark_Winds.jpg",
    url: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i"
  },
  {
    title: "Movie 2",
    img: "assets/Little_Voice.jpg",
    url: "https://www.imdb.com/title/tt8765370/?ref_=ttep_ov_i"
  },
  {
    title: "Movie 3",
    img: "assets/Morko_Mali.jpg",
    url: "https://www.imdb.com/title/tt8267604/?ref_=ttep_ov_i"
  },
  {
    title: "Movie 4",
    img: "assets/P_Valley.jpg",
    url: "https://www.imdb.com/title/tt9065660/?ref_=ttep_ov_i"
  }
];

const posterGrid = document.getElementById("posterGrid");

posters.forEach(poster => {
  const anchor = document.createElement("a");
  anchor.href = poster.url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.title = poster.title;

  const img = document.createElement("img");
  img.src = poster.img;
  img.alt = poster.title;

  anchor.appendChild(img);
  posterGrid.appendChild(anchor);
});


document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ script.js loaded");

    const posterGrid = document.getElementById("posterGrid");
    if (!posterGrid) {
        console.error("❌ No element with ID 'posterGrid' found!");
        return;
    }

    // Posters array
    const posters = [
        {
            img: "assets/Dark_Winds.jpg",
            link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i"
        }
    ];

    // Loop through posters and add to the grid
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
});

