//* NAVBAR START

const navLinks = document.querySelectorAll('.nav-link');
let navbarIndex = 0;

const navbar = (target) => {
  navLinks[navbarIndex].classList.remove('active');
  target.classList.add('active');
}
//* END

//* LINKS DECLARATION

const home = document.querySelector('.background');
const homenav = document.querySelectorAll('.nav-link')[0];

const project = document.querySelector('.project-container');
const projectnav = document.querySelectorAll('.nav-link')[1];

const about = document.querySelector('.about-container');
const aboutnav = document.querySelectorAll('.nav-link')[2];

//* END

//* SCROLL LINKS

navLinks[0].addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

navLinks[1].addEventListener('click', () => {
  project.scrollIntoView({
    behavior: 'smooth',
  });
});

navLinks[2].addEventListener('click', () => {
  about.scrollIntoView({
    behavior: 'smooth',
  });
});

//* END

window.addEventListener('scroll', () => {

  //* HOME
  if (window.scrollY > 0
    && window.scrollY < home.offsetHeight / 2
    && !homenav.classList.contains('active'))
    {
      navbar(homenav);
      navbarIndex = 0;
    }

  //* PROJECT

    else if ( window.scrollY > home.offsetHeight / 2
    && window.scrollY < project.offsetTop + project.scrollHeight / 2
    && !projectnav.classList.contains('active'))
    {
      navbar(projectnav);
      navbarIndex = 1;
    }

  //* ABOUT
  else if (window.scrollY > project.offsetTop + project.scrollHeight / 2
    && !aboutnav.classList.contains('active'))
    {
      navbar(aboutnav);
      navbarIndex = 2;
    }
});
