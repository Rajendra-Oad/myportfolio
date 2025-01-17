const scroll = new LocomotiveScroll({
 el: document.querySelector('#main'),
  smooth:true
});


// toggle dark mode

let darkMode = localStorage.getItem('dark_mode');
const darkToggle = document.getElementById('theme_switch')

darkToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('dark_mode');
  darkMode !== 'active' ? enableDarkMode() : disableDarkMode();
})

const enableDarkMode = () => {
  document.body.classList.add('dark_mode');
  localStorage.setItem('dark_mode', 'active');
}

const disableDarkMode = () => {
  document.body.classList.remove('dark_mode');
  localStorage.setItem('dark_mode', null);
}

if (darkMode === 'active') enableDarkMode()


// Function to detect if the device is a laptop
function isLaptop() {
    // Check screen width for laptop range
    const isLaptopScreen = window.matchMedia("(min-width: 1024px) and (max-width: 1440px)").matches;

    if (isLaptopScreen) {
        console.log("This is a laptop.");
        // Call the laptop-specific function
        executeLaptopFunction();
    } else {
        console.log("This is not a laptop.");
    }
}

// Laptop-specific functionality
function executeLaptopFunction() {
    Shery.mouseFollower();
}

// Event listener for page load and window resize
window.onload = isLaptop; // Check on page load
window.onresize = isLaptop; // Check on window resize


Shery.makeMagnet('.magnet');
