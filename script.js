document.addEventListener("DOMContentLoaded", function () {
  const posters = [
    {
      img: "assets/poster1.jpg", // relative path — recommended
      link: "https://www.imdb.com/title/tt15017118/?ref_=ttep_ov_i",
      alt: "Poster — tt15017118"
    },
    // add more posters here...
    // { img: "assets/poster2.jpg", link: "https://www.imdb.com/title/ttXXXXX/", alt: "Poster 2" }
  ];

  const posterGrid = document.getElementById("posterGrid");
  if (!posterGrid) {
    console.error("posterGrid element not found");
    return;
  }

  posters.forEach(poster => {
    const a = document.createElement("a");
    a.href = poster.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";

    const img = document.createElement("img");
    img.src = poster.img;
    img.alt = poster.alt || "Movie Poster";
    // show a console message if image fails to load
    img.onerror = () => {
      console.error("Failed to load image:", poster.img);
      img.src = "https://via.placeholder.com/300x450?text=No+Image"; // fallback
    };

    a.appendChild(img);
    posterGrid.appendChild(a);
  });
});
