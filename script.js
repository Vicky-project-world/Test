// Navbar scroll effect

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 850) {
        navbar.style.backgroundColor = 'rgba(192, 188, 184, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('list');
    if (window.scrollY > 850) {
        navbar.style.backgroundColor = 'rgba(235, 154, 61, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});



// Mobile menu toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    burger.classList.toggle('toggle');
});

// Form submission with EmailJS
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const successMessage = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Disable the submit button while processing
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // Hide any previous messages
    successMessage.style.display = 'none';
    errorMessage.style.display = 'none';

    // Prepare the template parameters
    const templateParams = {
        from_name: this.name.value,
        from_email: this.email.value,
        phone: this.phone.value,
        event_type: this.eventType.value,
        event_date: this.eventDate.value,
        message: this.message.value
    };

    // Send the email using EmailJS
    emailjs.send('service_2yeaxhu', 'template_0zrdk0r', templateParams)
        .then(function() {
            // Show success message
            successMessage.style.display = 'block';
            // Reset the form
            contactForm.reset();
        }, function(error) {
            // Show error message
            errorMessage.style.display = 'block';
            console.error('Email error:', error);
        })
        .finally(function() {
            // Re-enable the submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        });
});
e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Portfolio image lazy loading
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px 50px 0px'
    };

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    }, imageOptions);

    images.forEach(img => imageObserver.observe(img));
});

// Animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .portfolio-item, .about-content');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);