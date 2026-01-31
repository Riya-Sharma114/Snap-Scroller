const toggleButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});



document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('/send-message', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('There was a problem sending your message.');
            }
        })
        .catch(error => {
            alert('There was an error: ' + error.message);
        });
});
