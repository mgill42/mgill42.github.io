let slideIndex1 = 0;
showSlide(1, slideIndex1);

let slideIndex2 = 0;
showSlide(2, slideIndex2);

let slideIndex3 = 0;
showSlide(3, slideIndex3);

let slideIndex4 = 0;
showSlide(4, slideIndex4);

function changeSlide(slideshowIndex, n) {
  if (slideshowIndex === 1) {
    slideIndex1 += n;
    showSlide(1, slideIndex1);
  } else if (slideshowIndex === 2) {
    slideIndex2 += n;
    showSlide(2, slideIndex2);
  } else if (slideshowIndex === 3) {
    slideIndex3 += n;
    showSlide(3, slideIndex3);
  } else if (slideshowIndex === 4) {
    slideIndex4 += n;
    showSlide(4, slideIndex4);
  }
}

function showSlide(slideshowIndex, n) {
  const slides = document.querySelectorAll("#slideshow" + slideshowIndex + " .slide");
  const prevButton = document.querySelector("#slideshow" + slideshowIndex + " .prev");
  const nextButton = document.querySelector("#slideshow" + slideshowIndex + " .next");

  if (n >= slides.length) {
    n = 0;
  } else if (n < 0) {
    n = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[n].style.display = "block";

  // Disable/Enable buttons based on slide position
  if (n === 0) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }

  if (n === slides.length - 1) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
}
