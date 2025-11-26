const nav = document.querySelector('[data-nav]');
const navToggle = document.querySelector('[data-nav-toggle]');
const body = document.body;

const setNavState = open => {
    if (!nav || !navToggle) return;
    nav.setAttribute('data-open', String(open));
    navToggle.setAttribute('aria-expanded', String(open));
    body.classList.toggle('nav-open', open);
};

navToggle?.addEventListener('click', () => {
    const isOpen = nav?.getAttribute('data-open') === 'true';
    setNavState(!isOpen);
});

nav?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.matchMedia('(max-width: 960px)').matches) {
            setNavState(false);
        }
    });
});

const currentPage = body.dataset.page;
if (currentPage) {
    document.querySelectorAll('[data-nav-link]').forEach(link => {
        if (link.dataset.target === currentPage) {
            link.classList.add('is-active');
        }
    });
}

const yearTargets = document.querySelectorAll('[data-year]');
yearTargets.forEach(node => {
    node.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector('.contact__form');
contactForm?.addEventListener('submit', event => {
    event.preventDefault();
    alert('Form stub only -- connect this to your backend to send messages.');
    contactForm.reset();
});
