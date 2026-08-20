const text = document.querySelector(".text");
const roles = ["UI/UX Designer", "Frontend Developer"];
let i = 0, j = 0, currentRole = "", deleting = false;

function typeEffect() {
  if (!deleting && j <= roles[i].length) {
    currentRole = roles[i].substring(0, j++);
    text.textContent = currentRole;
    setTimeout(typeEffect, 100);
  } else if (deleting && j >= 0) {
    currentRole = roles[i].substring(0, j--);
    text.textContent = currentRole;
    setTimeout(typeEffect, 50);
  } else {
    deleting = !deleting;
    if (!deleting) i = (i + 1) % roles.length;
    setTimeout(typeEffect, 1000);
  }
}
typeEffect();

function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;
  
  const currentTheme = localStorage.getItem('theme') || 'dark';
  
  body.setAttribute('data-theme', currentTheme);
  
  if (currentTheme === 'light') {
    themeIcon.className = 'bx bx-moon'; 
  } else {
    themeIcon.className = 'bx bx-sun'; 
  }
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    
    if (newTheme === 'light') {
      themeIcon.className = 'bx bx-moon'; 
    } else {
      themeIcon.className = 'bx bx-sun'; 
    }
    
    localStorage.setItem('theme', newTheme);
  });
}

function initCVDownload() {
  const downloadBtn = document.querySelector('a[href="cv.pdf"]');
  
  if (downloadBtn) {
    downloadBtn.addEventListener('click', (e) => {
      downloadBtn.style.opacity = '0.7';
      setTimeout(() => {
        downloadBtn.style.opacity = '1';
      }, 500);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initCVDownload();
  initExperienceTilt();
});

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.home-sci, .skills-container, .portfolio-container, .contact form', { origin: "bottom" });
ScrollReveal().reveal('.experience-subtitle', { origin: "top", delay: 280 });
ScrollReveal().reveal('.timeline-rail', { origin: "left", distance: "40px", delay: 320 });
ScrollReveal().reveal('.experience-card', { origin: "right", distance: "50px", delay: 380, duration: 1800 });
ScrollReveal().reveal('.exp-tag', { origin: "bottom", interval: 80, delay: 520, distance: "30px" });

function initExperienceTilt() {
  const card = document.querySelector('.experience-card');
  if (!card || window.matchMedia('(max-width: 768px)').matches) return;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-8px) scale(1.01) perspective(900px) rotateX(${y * -4}deg) rotateY(${x * 4}deg)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
}

const progressBars = document.querySelectorAll('.progress');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;

  progressBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;

    if(barTop < triggerBottom) {
      bar.style.width = bar.getAttribute('style').match(/width:\s*(\d+%)/)[1];
    }
  });
});

