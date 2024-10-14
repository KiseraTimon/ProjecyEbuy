const carouselContainer = document.querySelector('.carousel-container');
        const images = [
            'shopping12.jpeg',
            'shopping7.jpeg',
            'shopping11.jpeg',
            'shopping6.jpeg'
            
        ];
        let currentImageIndex = 0;

        function changeBackground() {
            carouselContainer.style.backgroundImage = `url(${images[currentImageIndex]})`;
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }

        document.addEventListener("DOMContentLoaded", () => {
            changeBackground(); // Set the initial image
            setInterval(changeBackground, 3000); // Change image every 3 seconds
        });

        // Increase size on hover
const discoverSection = document.querySelector("#find1");


discoverSection.addEventListener("mouseover", () => {
    discoverSection.style.transform = "scale(1.2)";
});

discoverSection.addEventListener("mouseout", () => {
    discoverSection.style.transform = "scale(1)";
});

const discoverSection1 = document.querySelector("#cart1");


discoverSection1.addEventListener("mouseover", () => {
    discoverSection1.style.transform = "scale(1.2)";
});

discoverSection1.addEventListener("mouseout", () => {
    discoverSection1.style.transform = "scale(1)";
});

const discoverSection2 = document.querySelector("#checkout1");


discoverSection2.addEventListener("mouseover", () => {
    discoverSection2.style.transform = "scale(1.2)";
});

discoverSection2.addEventListener("mouseout", () => {
    discoverSection2.style.transform = "scale(1)";
});

const section = document.querySelector("#cart1");

function fadeIn(element) {
    element.style.opacity = 0;
    let opacity = 0;
    const intervalID = setInterval(() => {
        if (opacity >= 1) {
            clearInterval(intervalID);
        }
        element.style.opacity = opacity;
        opacity += 2.5;
    }, 70);
}

window.addEventListener("load", () => {
    fadeIn(section); // Fade in the section on page load
});


// Change navigation bar color on scroll
window.addEventListener("scroll", () => {
    const navigationBar = document.getElementById("*");
    if (window.scrollY > 50) {
        navigationBar.style.backgroundColor = "#333"; // Change color when scrolling
    } else {
        navigationBar.style.backgroundColor = "transparent";
    }
});