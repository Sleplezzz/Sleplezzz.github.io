// parte 1
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
// Smooth scroll para navegación

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
      const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
          });
        }
    });
});  
// parte 2
