const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('#site-nav');
menuBtn.addEventListener('click', () => {
  const opened = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', opened ? 'true' : 'false');
});
document.querySelectorAll('#site-nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const modal = document.getElementById('profileModal');
const openProfile = () => {
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
};
const closeProfile = () => {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
};
document.querySelector('[data-open-profile]').addEventListener('click', openProfile);
document.querySelectorAll('[data-close-profile]').forEach(el => el.addEventListener('click', closeProfile));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeProfile(); });

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = encodeURIComponent(document.getElementById('name').value);
  const email = encodeURIComponent(document.getElementById('email').value);
  const subject = encodeURIComponent(document.getElementById('subject').value);
  const message = encodeURIComponent(document.getElementById('message').value);
  window.location.href = `mailto:contact.vreduo@gmail.com?subject=V-RE:DUO｜${subject}&body=お名前：${name}%0Aメールアドレス：${email}%0A%0A${message}`;
});
