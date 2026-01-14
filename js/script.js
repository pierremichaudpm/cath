// Smooth scroll behavior
document.documentElement.style.scrollBehavior = "smooth";

// Modal functionality (desktop only)
const modal = document.getElementById("paintingModal");
const modalImage = modal.querySelector(".modal-image");
const modalTitle = modal.querySelector(".modal-title");
const modalYear = modal.querySelector(".modal-year");
const modalMedium = modal.querySelector(".modal-medium");
const modalClose = modal.querySelector(".modal-close");
const modalOverlay = modal.querySelector(".modal-overlay");

// Check if desktop
function isDesktop() {
  return window.innerWidth > 768;
}

// Open modal
function openModal(imageSrc, title, year, medium) {
  if (!isDesktop()) return; // Only work on desktop

  // Replace thumbnail path with large image path for modal
  const largeImageSrc = imageSrc.replace("_thumb.jpg", "_large.jpg");

  modalImage.src = largeImageSrc;
  modalImage.alt = title;
  modalTitle.textContent = title;
  modalYear.textContent = year;
  modalMedium.textContent = medium;

  modal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scrolling
}

// Close modal
function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = ""; // Restore scrolling
}

// Add click listeners to paintings (desktop only)
document.addEventListener("DOMContentLoaded", () => {
  const paintingItems = document.querySelectorAll(".painting-item");

  paintingItems.forEach((item) => {
    const frame = item.querySelector(".painting-frame");
    const img = item.querySelector(".painting-frame img");
    const title = item.querySelector(".painting-title").textContent;
    const year = item.querySelector(".painting-year").textContent;
    const medium = item.querySelector(".painting-medium").textContent;

    frame.addEventListener("click", () => {
      if (isDesktop()) {
        openModal(img.src, title, year, medium);
      }
    });
  });

  // Close modal on click
  modalClose.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);

  // Close modal on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
});

// Intersection Observer for additional scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all painting items for scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const paintingItems = document.querySelectorAll(".painting-item");

  paintingItems.forEach((item, index) => {
    observer.observe(item);
  });
});

// Add loading state for images
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".painting-frame img");

  images.forEach((img) => {
    img.addEventListener("load", function () {
      this.parentElement.classList.add("loaded");
    });

    // Handle missing images gracefully
    img.addEventListener("error", function () {
      this.parentElement.style.opacity = "0.3";
      console.warn(`Image not found: ${this.src}`);
    });
  });
});
