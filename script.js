// Изменение цвета header'а
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const navMenu = document.querySelector('.nav-menu');
    if (window.scrollY > 20) {
      header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
      navMenu.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
      header.style.backgroundColor = 'transparent';
      navMenu.style.backgroundColor = 'transparent';
    }
  });
  

// Алерт при отправке формы
  document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    e.target.reset();
  });


// Реализация гамбургер-меню
  document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.container')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});