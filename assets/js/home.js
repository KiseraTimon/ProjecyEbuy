const items = document.querySelectorAll('.item');
const options = {
    threshold: 0.5 
};


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-left');
            observer.unobserve(entry.target);
        }
    });
}, options);

items.forEach(item => {
    observer.observe(item);
});


let carouselIndex = 0;
const carouselImages = document.querySelectorAll('.carousel-img');

function changeCarouselImage() {
    carouselImages.forEach((img, index) => {
        img.classList.remove('active');
        if (index === carouselIndex) {
            img.classList.add('active');
        }
    });
    carouselIndex = (carouselIndex + 1) % carouselImages.length;
}

setInterval(changeCarouselImage, 3000); 
