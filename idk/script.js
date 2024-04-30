// Image Carousel
let currentDay = 0;
const galleryImages = document.querySelectorAll(".gallery img");
const totalDays = galleryImages.length;

function showDay(day) {
  galleryImages.forEach((image) => (image.style.display = "none"));
  currentDay = (day + totalDays) % totalDays;
  galleryImages[currentDay].style.display = "block";
}

function prevSlide() {
  showDay(currentDay - 1);
}

function nextSlide() {
  showDay(currentDay + 1);
}

showDay(currentDay);

document.querySelectorAll("nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
