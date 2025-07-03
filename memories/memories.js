let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) 
})

document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox .close');

    // Add click event to each item
    items.forEach(item => {
        item.addEventListener('click', () => {
            const imageUrl = item.getAttribute('data-image');
            lightboxImg.src = imageUrl;
            lightbox.style.display = 'flex';
        });
    });

    // Close lightbox
    closeBtn.addEventListener('click', () => {
        closeLightbox();
    });

    // Close lightbox on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Function to close lightbox with animation
    function closeLightbox() {
        lightbox.style.animation = "fadeOut 0.5s ease";
        setTimeout(() => {
            lightbox.style.display = 'none';
            lightbox.style.animation = "fadeIn 0.5s ease";
        }, 500);
    }
});
