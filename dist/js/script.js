// Navbar fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    }else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
 
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})


const slider = document.querySelector(".slider")
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//Image slider next button
nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideIcons.forEach((slideicon) => {
        slideicon.classList.remove('active');
    });

    slideNumber++;
    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }
    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active');
} )

//Image slider prev button
prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
    slideIcons.forEach((slideicon) => {
        slideicon.classList.remove('active');
    });

    slideNumber--;
    if (slideNumber < 0) {
        slideNumber = numberOfSlides-1;
    }
    slides[slideNumber].classList.add('active');
    slideIcons[slideNumber].classList.add('active');
} )


// image slider autoplay
var playSlider;
var repeater = () => {
    playSlider = setInterval(function(){
        slides.forEach((slide) => {
            slide.classList.remove('active');
        });
        slideIcons.forEach((slideicon) => {
            slideicon.classList.remove('active');
        });
    
        slideNumber++;
        if (slideNumber > (numberOfSlides - 1)) {
            slideNumber = 0;
        }
        slides[slideNumber].classList.add('active');
        slideIcons[slideNumber].classList.add('active');
    },4000);
}

repeater();

// stop image slider autoplay when mouseover
slider.addEventListener('mouseover',() => {
    clearInterval(playSlider);
});

// start image slider again when mouseout
slider.addEventListener('mouseout',() => {
    repeater();
});
