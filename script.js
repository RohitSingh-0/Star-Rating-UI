// Rating buttons, submit button, containers
const ratingButtons = document.querySelectorAll(".rating");
const submitBtn = document.getElementById("submit-button");
const ratingContainer = document.getElementById("container");
const thankYouSection = document.getElementById("thank-you");
const selectedRatingText = document.getElementById("selected-rating");

let selectedRating = 0; // Store selected rating

// Step 1: User selects rating
ratingButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Remove 'selected' class from all buttons first
    ratingButtons.forEach((b) => b.classList.remove("selected"));

    // Add 'selected' class to the clicked button
    btn.classList.add("selected");

    // Store the selected rating value
    selectedRating = btn.textContent;
  });
});

// Step 2: User clicks submit
submitBtn.addEventListener("click", () => {
  if (selectedRating !== 0) {
    // Hide rating container
    ratingContainer.style.display = "none";

    // Show thank-you section
    thankYouSection.style.display = "block"; // or "block", as per your layout

    // Insert selected rating into thank-you message
    selectedRatingText.textContent = selectedRating;
  } else {
    alert("Please select a rating before submitting.");
  }
});
