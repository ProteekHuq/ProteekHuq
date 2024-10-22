// script.js

// Functionality for Image Lightbox in Gallery (optional feature)
const galleryImages = document.querySelectorAll('.gallery-image');

galleryImages.forEach(image => {
    image.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        document.body.appendChild(lightbox);

        const img = document.createElement('img');
        img.src = image.src;
        lightbox.appendChild(img);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

// Simple contact form validation
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const message = document.querySelector('textarea[name="message"]').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields before submitting!');
            e.preventDefault(); // Stop the form from submitting
        }
    });
}
