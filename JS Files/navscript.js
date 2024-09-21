const menu = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.navbarMenu');
const navLogo = document.querySelector('#navbarLogo');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  };
  
  menu.addEventListener('click', mobileMenu);

  // Close mobile menu 
  const hideMobile = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle ('is-active');
      menuLinks.classList.remove('active');
    }
  };

  menuLinks.addEventListener('click', hideMobile);
  navLogo.addEventListener('click', hideMobile);
  
/* Hide navbar when scroll down */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-120px";
  }
  prevScrollpos = currentScrollPos;
}