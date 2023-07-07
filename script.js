//  var nam=prompt("What is your name?");
// alert("Hi, "+nam+" Welcome to my portfolio");
// /*======*/
// Setup and start animation 
var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Programmer','App Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
  });
  // Scroll Reveal and Scrolling Effects
  ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });
 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.services-container, .projects-box, .contact form', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content p, .about-content p', { origin: 'right' });
 ScrollReveal().reveal('.home-content h1, .about-content h3', { origin: 'left' });