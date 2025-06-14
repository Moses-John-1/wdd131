document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const feedback = document.getElementById('formFeedback');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    // Load saved drafts
    nameInput.value = localStorage.getItem('contact_name') || '';
    emailInput.value = localStorage.getItem('contact_email') || '';
    messageInput.value = localStorage.getItem('contact_message') || '';

    // Save to localStorage as user types
    nameInput.addEventListener('input', () => {
        localStorage.setItem('contact_name', nameInput.value);
    });

    emailInput.addEventListener('input', () => {
        localStorage.setItem('contact_email', emailInput.value);
    });

    messageInput.addEventListener('input', () => {
        localStorage.setItem('contact_message', messageInput.value);
    });

    // Form submit
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (name && email) {
            feedback.textContent = '✅ Your message has been sent successfully!';
            feedback.style.color = 'green';

            // Clear form and localStorage
            form.reset();
            localStorage.removeItem('contact_name');
            localStorage.removeItem('contact_email');
            localStorage.removeItem('contact_message');
        } else {
            feedback.textContent = '❌ Please fill in the required fields.';
            feedback.style.color = 'red';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Set current year
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Set last modified date
    const modifiedSpan = document.getElementById("last-modified");
    if (modifiedSpan) {
        modifiedSpan.textContent = new Date(document.lastModified).toLocaleString();
    }
});
