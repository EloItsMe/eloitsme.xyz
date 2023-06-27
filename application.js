//* BACKGROUND START

const background = document.querySelector('.background');

background.addEventListener('mousemove', (event) => {
  const x = event.pageX;
  const y = event.pageY;

  const cursor = document.querySelector('.cursor');

  cursor.style.left = x + 'px';
  cursor.style.top = y + 'px';
})

//* BACKGROUND END

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
