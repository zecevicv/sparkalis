/* #Hamburger Menu
  ======================================================= */
const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('.header .hamburger');
const body = document.querySelector('body');
const headerLinks = document.querySelector('.header-links');

hamburgerBtn.addEventListener('click', (e) => {
  hamburgerBtn.classList.toggle('is-active');
  header.classList.toggle('show-menu');
  body.classList.toggle('no-scroll');
});

if (window.innerWidth < 1024) {
  headerLinks.style.display = 'none';
  setTimeout(() => {
    headerLinks.style.display = 'flex';
  }, 250);
}

/* #AOS Animations
    ======================================================= */
AOS.init({
  startEvent: 'load',
  once: true,
  duration: 800,
  offset: 300,
});

/* #Header Links Scroll To
    ======================================================= */
const headerScrollLinks = document.querySelectorAll('.header-links a');

headerScrollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const scrollElement = document.querySelector(e.target.hash);

    

    if (window.innerWidth < 1024) {
      hamburgerBtn.classList.remove('is-active');
      header.classList.remove('show-menu');
      body.classList.remove('no-scroll');

      scrollElement.scrollIntoView({ behavior: 'smooth', block: 'start'});
    } else {
      scrollElement.scrollIntoView({ behavior: 'smooth', block: 'end'});
    }
  });
});