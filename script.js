 // JavaScript function to toggle the image and animation
 let toggle = true;
    
 function changeImage() {
   const imageElement = document.getElementById("toggleImage");
   const buttonElement = document.getElementById("toggleButton");

   // Toggle the image source
   if (toggle) {
     imageElement.src = "./media/2nd image.png";
   } else {
     imageElement.src = "./media/1st image.png";
   }

   // Toggle the button animation
   buttonElement.classList.toggle("active");

   toggle = !toggle; // Flip the toggle state
}

// Select buttons and popup elements
const appStoreButton = document.getElementById('app-store-button');
const googlePlayButton = document.getElementById('google-play-button');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const closePopupButton = document.getElementById('close-popup');

// Function to show popup
function showPopup() {
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

// Function to close popup
function closePopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

// Add event listeners to buttons
appStoreButton.addEventListener('click', showPopup);
googlePlayButton.addEventListener('click', showPopup);
closePopupButton.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);