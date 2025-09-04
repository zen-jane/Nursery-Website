let items = document.querySelectorAll(".item");
let currentIndex = 0;

document.querySelector(".next").onclick = function () {
  // Hide current item
  items[currentIndex].classList.remove("active");

  // next index
  currentIndex++;
  if (currentIndex >= items.length) {
    currentIndex = 0; // Again first slide
  }

  // Show new item
  items[currentIndex].classList.add("active");
};

document.querySelector(".prev").onclick = function () {
  // Hide current item
  items[currentIndex].classList.remove("active");

  // previous index
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = items.length - 1; // last slide
  }

  // Show new item
  items[currentIndex].classList.add("active");
};
