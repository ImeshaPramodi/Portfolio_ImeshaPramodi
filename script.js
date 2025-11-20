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
});

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: "top" });
ScrollReveal().reveal('.home-sci, .skills-container, .portfolio-container, .contact form', { origin: "bottom" });

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

