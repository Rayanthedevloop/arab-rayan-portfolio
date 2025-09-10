// script.js for Arab Rayan portfolio
document.getElementById('year').textContent = new Date().getFullYear();

// NAV burger
const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');
burger && burger.addEventListener('click', () => {
  nav.classList.toggle('open');
  if (!document.querySelector('.mobile-menu')) {
    const menu = document.createElement('div');
    menu.className = 'mobile-menu';
    menu.innerHTML = '<a href="#home">Accueil</a><a href="#about">À propos</a><a href="#projets">Projets</a><a href="#certifications">Certifications</a><a href="#contact">Contact</a>';
    document.body.appendChild(menu);
  }
});

// sticky nav effect
const navInner = document.querySelector('.nav-inner');
window.addEventListener('scroll', () => {
  const sc = window.scrollY;
  if (sc > 40) {
    navInner.style.transform = 'translateY(-6px) scale(0.98)';
    navInner.style.backdropFilter = 'blur(18px) saturate(160%)';
  } else {
    navInner.style.transform = '';
    navInner.style.backdropFilter = '';
  }
});

// background halo follow mouse
const pageBg = document.getElementById('pageBg');
document.addEventListener('mousemove', (e) => {
  const pctX = (e.clientX / window.innerWidth) * 100;
  const pctY = (e.clientY / window.innerHeight) * 100;
  pageBg.style.setProperty('--mx', pctX + '%');
  pageBg.style.setProperty('--my', pctY + '%');
});

// IntersectionObserver reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inview');
      io.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll('.section, .glass-card, .project').forEach(el => io.observe(el));

// tilt effect for project cards
function handleTilt(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const cx = rect.width/2;
  const cy = rect.height/2;
  const dx = (x - cx) / cx;
  const dy = (y - cy) / cy;
  const tiltX = (dy * 6).toFixed(2);
  const tiltY = (dx * -6).toFixed(2);
  card.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(0)`;
  card.style.boxShadow = '0 30px 80px rgba(2,6,23,0.6)';
}
function resetTilt(e) {
  const card = e.currentTarget;
  card.style.transform = '';
  card.style.boxShadow = '';
}
document.querySelectorAll('.project-tilt').forEach(card => {
  card.addEventListener('mousemove', handleTilt);
  card.addEventListener('mouseleave', resetTilt);
  card.addEventListener('focus', (e)=> card.classList.add('focus'));
  card.addEventListener('blur', (e)=> card.classList.remove('focus'));
});

// smooth internal links + close mobile menu
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const href = this.getAttribute('href');
    if (href.length>1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
      if (nav.classList.contains('open')) nav.classList.remove('open');
    }
  });
});
