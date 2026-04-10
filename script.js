// Disable browser scroll restoration so the page always loads at the top
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Loader
window.addEventListener('load', () => {
    window.scrollTo(0, 0);
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1800);
});

// Header scroll
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 80) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Scroll reveal — subtle, slow
const revealElements = document.querySelectorAll(
    '.sec-head, .about-photo, .about-text, .product, .craft-item, ' +
    '.work-item, .news-list li, .contact-action, .contact-info'
);

revealElements.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('in-view');
            }, i * 80);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
});

revealElements.forEach(el => observer.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
