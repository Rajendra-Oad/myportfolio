 const scroll = new LocomotiveScroll({
   el: document.querySelector('#main'),
   smooth:true
 });


//navbar menu toggle
let menuBar = document.getElementById('menu');
let navbar = document.querySelector('.header nav .nav_menu');
let navbarColor =  document.querySelector('.header nav .nav_container');
let navLinks = document.querySelectorAll('.nav_link');
let isNavbarOpen = false;


menuBar.addEventListener('click', () => {
  isNavbarOpen = !isNavbarOpen;
  navbar.classList.toggle('show');
  navbarColor.classList.toggle('toggle'); 
  menuBar.innerHTML = isNavbarOpen ? `<i class="ri-close-line"></i>` : `<i class="ri-menu-line"></i>`;
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    isNavbarOpen = false;
    menuBar.innerHTML = `<i class="ri-menu-line"></i>`;
    navbar.classList.remove('show');
    navbarColor.classList.remove('toggle');
  });
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


//Shery Js and ThreeJs

//Shery.mouseFollower();
//Shery.makeMagnet('.magnet');

Shery.textAnimate(".text-animate", {
  style: 1,
  debug: true,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23,1,0.320,1)",
  multiplier: 0.1,
});

Shery.imageMasker(".mask_image", {
  mouseFollower: true,
  text: "Rajendra Oad",
  ease: "cubic-bezier(0.23,1,0.320,1)",
  duration: 1,
})

Shery.imageEffect(".imgEff", {
  style: 1,
  debug: true,
  config: {

  },
  preset: "./presets/wigglewobble.json",
});

Shery.hoverWithMediaCircle(".hover_effect", {
  videos: ["./assets/img/video_1.mp4", "./assets/img/video_2.mp4", "./assets/img/video_3.mp4"],
});

function isLaptop() {
  const isLaptopScreen = window.matchMedia("(min-width: 1024px)").matches;
  if(isLaptopScreen){
     executeLaptopFunction();
   }else{
     console.log("Not Laptop");
   } }

 function executeLaptopFunction(){
   Shery.mouseFollower();
   Shery.makeMagnet('.magnet');
  
 }
