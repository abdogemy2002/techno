let cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
    card.addEventListener("mouseover", function () {
      
    let images = card.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      images[i].style.filter = "brightness(0) invert(1)";
    }
  });

  card.addEventListener("mouseout", function () {
    let images = card.getElementsByTagName("img");
    for (let i = 0; i < images.length; i++) {
      images[i].style.filter = "none";
    }
  });
});