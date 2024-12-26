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
  localStorage.setItem('dark_mode','active');
}

const disableDarkMode = () =>{
  document.body.classList.remove('dark_mode');
  localStorage.setItem('dark_mode',null);
}

if (darkMode === 'active') enableDarkMode()
