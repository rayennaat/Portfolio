// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Updated scroll handler
window.addEventListener('click', () => {
  const navbar = document.getElementById('navbar');
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';

  if (window.scrollY > 50) {
    navbar.style.background = isLight 
      ? 'rgba(255, 255, 255, 0.95)' 
      : 'rgba(26, 26, 46, 0.95)';
  } else {
    navbar.style.background = isLight 
      ? 'rgba(255, 255, 255, 0.95)' 
      : 'rgba(26, 26, 46, 0.9)';
  }
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');

// Check saved preference or default to dark
let currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
updateIcon();

themeToggle.addEventListener('click', () => {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', currentTheme);
  localStorage.setItem('theme', currentTheme);
  updateIcon();
});

function updateIcon() {
  icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}


// Animate projects when visible
const projectsSection = document.querySelector('.projects-grid');

const projectObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.project-card').forEach(card => {
        card.style.animationPlayState = 'running';
      });
    }
  });
}, { threshold: 0.1 });

if (projectsSection) projectObserver.observe(projectsSection);

// Form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    
    // Here you would typically send to a server
    console.log('Form submitted:', Object.fromEntries(formData));
    
    // Show success message
    alert('Message sent! I\'ll get back to you soon.');
    contactForm.reset();
    
    // Reset floating labels
    document.querySelectorAll('.form-group label').forEach(label => {
      label.style.top = '1rem';
      label.style.left = '1rem';
      label.style.fontSize = '1rem';
    });
  });
}

// Auto-update year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.opacity = '1';
    backToTopBtn.style.visibility = 'visible';
  } else {
    backToTopBtn.style.opacity = '0';
    backToTopBtn.style.visibility = 'hidden';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});