//* NAVBAR START

const navLinks = document.querySelectorAll('.nav-link');
let navbarIndex = 0;

navLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    navLinks[navbarIndex].classList.remove('active');
    event.target.classList.add('active');
    navbarIndex = index;
  });
});

//* NAVBAR END
