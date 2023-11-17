let currentSlideIndex = 0;
function showSlide(index, direction) {
    const slides = document.getElementsByClassName("slide");
    const descriptions = document.getElementsByClassName("description");

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    descriptions[i].style.display = "none";
  }

  //  initial position for the incoming slide
  const incomingPosition = (direction === "next") ? "100%" : "-100%";

  // Display the incoming slide and description
  slides[index].style.display = "block";
  descriptions[index].style.display = "block";

  // Animate the incoming slide and current slide
  slides[index].style.animation = `slideIn${direction} 1s forwards`;
  if (currentSlideIndex !== null) {
    slides[currentSlideIndex].style.animation = `slideOut${direction} 1s forwards`;
  }

  // Update the current slide index
  currentSlideIndex = index;

  // Update button visibility based on current slide index
  updateButtonVisibility();
}

function nextSlide() {
  const nextIndex = (currentSlideIndex + 1) % document.getElementsByClassName("slide").length;
  showSlide(nextIndex, "next");
}

function prevSlide() {
  const prevIndex = (currentSlideIndex - 1 + document.getElementsByClassName("slide").length) % document.getElementsByClassName("slide").length;
  showSlide(prevIndex, "prev");
}

function updateButtonVisibility() {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  // Show/hide prev button based on current slide index
  prevButton.style.display = (currentSlideIndex === 0) ? "none" : "block";

  // Show/hide next button based on current slide index
  nextButton.style.display = (currentSlideIndex === document.getElementsByClassName("slide").length - 1) ? "none" : "block";
}

// Initial setup
showSlide(currentSlideIndex, "none"); // "none" to prevent initial animation
updateButtonVisibility(); // Set initial button visibility
