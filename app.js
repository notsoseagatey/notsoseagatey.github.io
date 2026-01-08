'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.querySelector('.btn');
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // theme toggle thingy
    if (switcher) {
        switcher.addEventListener('click', function () {
            document.body.classList.toggle('light-theme');
            document.body.classList.toggle('dark-theme');

            const className = document.body.className;
            if (className === 'light-theme') {
                this.textContent = 'Dark';
            } else {
                this.textContent = 'Light';
            }
        });
    }

    // smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
            }
        });
    });

    
});