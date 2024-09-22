var drums=document.querySelectorAll(".drum");for(var i=0;i<drums.length;i++){drums[i].addEventListener("click",function(){makeSound(this.innerHTML);changeColor(this)})}
document.addEventListener("keypress",function(event){var key=event.key;var button=document.querySelector("."+key);if(button){makeSound(key);changeColor(button)}});function makeSound(key){switch(key){case "w":var tom1=new Audio("sounds/tom-1.mp3");tom1.play();break;case "a":var tom2=new Audio("sounds/tom-2.mp3");tom2.play();break;case "s":var tom3=new Audio("sounds/tom-3.mp3");tom3.play();break;case "d":var tom4=new Audio("sounds/tom-4.mp3");tom4.play();break;case "j":var snare=new Audio("sounds/snare.mp3");snare.play();break;case "k":var crash=new Audio("sounds/crash.mp3");crash.play();break;case "l":var kick=new Audio("sounds/kick-bass.mp3");kick.play();break;default:console.log("Error: No sound mapped to key: "+key);break}}
function changeColor(button){button.style.color="white";setTimeout(function(){button.style.color=""},100)}
const scrollLockBtn=document.getElementById('scrollLockBtn');let isScrollLocked=!1;scrollLockBtn.addEventListener('click',function(){if(isScrollLocked){document.body.style.overflow='auto';scrollLockBtn.textContent='🔓'}else{document.body.style.overflow='hidden';scrollLockBtn.textContent='🔒'}
isScrollLocked=!isScrollLocked})
