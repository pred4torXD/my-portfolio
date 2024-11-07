// Function to add a new recommendation
function addRecommendation() {
  // Retrieve recommendation text from the input field
  const recommendationText = document.getElementById('new_recommendation').value;

  // Check if the input is empty
  if (recommendationText.trim() === "") {
    alert("Please enter a recommendation.");
    return;
  }

  // Create a new recommendation element
  const recommendation = document.createElement('div');
  recommendation.classList.add('recommendation');
  recommendation.innerHTML = `<span>&#8220;</span>${recommendationText}<span>&#8221;</span>`;
  
  // Add the new recommendation to the recommendations section
  document.getElementById('all_recommendations').appendChild(recommendation);

  // Clear the input field after submission
  document.getElementById('new_recommendation').value = "";

  // Show the confirmation popup after successful submission
  showPopup(true);
}

// Function to show or hide the popup
function showPopup(show) {
  const popup = document.getElementById('popup');
  const popupMessage = document.getElementById('popupMessage');

  if (show) {
    // Show the popup with a confirmation message
    popup.style.visibility = 'visible';
    popupMessage.textContent = "Thank you for your recommendation!";  // Add confirmation text here
  } else {
    // Hide the popup
    popup.style.visibility = 'hidden';
  }
}

// Function to close the popup when the 'Ok' button is clicked
function closePopup() {
  showPopup(false);
}
