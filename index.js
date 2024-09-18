// Store all drum elements in a variable for efficiency
var drums = document.querySelectorAll(".drum");

// Add click event listeners to each drum element
for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    makeSound(this.innerHTML); // Pass the inner HTML (which should be a key)
    changeColor(this); // Change color of the clicked element
  });
}

// Add keypress event listener to the entire document
document.addEventListener("keypress", function (event) {
  var key = event.key;
  var button = document.querySelector("." + key);
  if (button) {
    makeSound(key); // Pass the key pressed
    changeColor(button); // Change color of the corresponding button
  }
});

// Function to play sound based on the key
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log("Error: No sound mapped to key: " + key);
      break;
  }
}

// Function to change color of the button and reset it after a short delay
function changeColor(button) {
  button.style.color = "white"; // Change color to white
  setTimeout(function () {
    button.style.color = ""; // Reset color after 100ms (or adjust as needed)
  }, 100);
}
//scroll lock
const scrollLockBtn = document.getElementById('scrollLockBtn');
let isScrollLocked = false;

scrollLockBtn.addEventListener('click', function() {
  if (isScrollLocked) {
    // Unlock scroll
    document.body.style.overflow = 'auto';
    scrollLockBtn.textContent = '🔓';
  } else {
    // Lock scroll
    document.body.style.overflow = 'hidden';
    scrollLockBtn.textContent = '🔒';
  }
  
  isScrollLocked = !isScrollLocked;
});
