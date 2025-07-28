// Gothic Art Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Fade in elements on page load
    const fadeElements = document.querySelectorAll('.hero-content, .featured-item, .gallery-item, .about-content, .process-item, .shop-item');

    fadeElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = '0';
            element.style.animation = `fadeIn 1s ease forwards ${index * 0.2}s`;
        }, 100);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add parallax effect to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        // Remove previous scroll event to avoid double movement
        // Use CSS background-attachment: fixed for desktop, fallback to JS for mobile if needed
        function setHeroParallax() {
            if (window.innerWidth > 900) {
                hero.style.backgroundAttachment = 'fixed';
                hero.style.backgroundPosition = 'center center';
                window.removeEventListener('scroll', hero._parallaxHandler || (()=>{}));
            } else {
                hero.style.backgroundAttachment = 'scroll';
                // For mobile, use a subtle parallax
                const handler = () => {
                    const scrollPosition = window.scrollY;
                    hero.style.backgroundPosition = `center ${scrollPosition * 0.2}px`;
                };
                window.addEventListener('scroll', handler);
                hero._parallaxHandler = handler;
            }
        }
        setHeroParallax();
        window.addEventListener('resize', setHeroParallax);
    }

    // Gallery image click to enlarge
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            // In a real implementation, this would open a modal with the full-size image
            this.classList.toggle('enlarged');
        });
    });

    // Form submission handler (for demo purposes)
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // In a real implementation, this would send the form data to a server
            alert('Thank you for your message. In a real implementation, this would be sent to the server.');

            // Reset form
            this.reset();
        });
    }

    // Shop functionality (for demo purposes)
    const shopButtons = document.querySelectorAll('.shop-button');
    shopButtons.forEach(button => {
        button.addEventListener('click', function() {
            // In a real implementation, this would add the item to a cart
            const itemName = this.closest('.shop-item').querySelector('h3').textContent;
            alert(`"${itemName}" has been added to your cart. In a real implementation, this would update your shopping cart.`);
        });
    });
});

// Create a spooky cursor effect
document.addEventListener('mousemove', function(e) {
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';

    document.body.appendChild(cursor);

    setTimeout(function() {
        cursor.remove();
    }, 1000);
});
