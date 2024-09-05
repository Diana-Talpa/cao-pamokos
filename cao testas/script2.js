document.addEventListener("DOMContentLoaded", function() {
    const buttonElement = document.getElementById('btn__element'); // Button to be clicked
    const buttonState = document.getElementById('btn__state');     // Div displaying the counter
  
    let clickCount = 0;  // Initialize counter
  
    // Add a click event listener to the button
    buttonElement.addEventListener('click', function() {
      clickCount++;  // Increment the counter
      buttonState.textContent = clickCount;  // Update the display with the new count
    });
  });
  