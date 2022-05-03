const carBtnPrev = document.querySelector('.home__carousel__button__container__prev');
const carBtnNext = document.querySelector('.home__carousel__button__container__next');
const carBtnWelcome = document.querySelector('.welcome__button')
const headerContainer = document.getElementById('introCarousel')
const headerUI = document.getElementById('introCarouselUI')
let navHeight = globalNav.offsetHeight;
carBtnNext.addEventListener('click', nextSlide);
carBtnPrev.addEventListener('click', prevSlide);
carBtnWelcome.addEventListener('click', scrollTillNavOnTop)
const carSlideshow = document.querySelector('.home__carousel__slideshow')
var carSlides = carSlideshow.children;
var carSlideIndex = 0;
var carAutoPlay = setInterval(autoplayCarSlides, 5000)
const navPosition = globalNav.getBoundingClientRect().top;
function scrollTillNavOnTop() {
    console.log(navPosition)
    window.scroll({
        top: navPosition,
        behavior: 'smooth'
    })

}
/*---SCROLL LISTENER TO TURN CAROUSEL INTO PARALLAX--*/
window.addEventListener("scroll", function () {
    /*---Check distance scrolled--*/
    let distance = this.window.scrollY;
    /*---Move header up--*/
    if (headerContainer.getBoundingClientRect().top <= 1) {
        headerContainer.style.transform = `translateY(${distance * 1}px)`;
    }/*---Else move header down--*/
     else {
        headerContainer.style.transform = `translateY(${distance / 1}px)`;
    }
    /*---Calculate client window height--*/
    let height = Math.max(this.document.documentElement.clientHeight, this.window.innerHeight || 0)
    /*---If scrolled distance is more than window height/2 turn carousel into absolute and hide header--*/
    if (distance > height/2) {
        hideHeaderUI();
    } else {
        showHeaderUI();
    }
})
function hideHeaderUI() {
    headerUI.style.opacity = '0'
}
function showHeaderUI() {
    headerUI.style.opacity = '1'
}






function resetAutoplay() {
    clearInterval(carAutoPlay)
    carAutoPlay = setInterval(autoplayCarSlides, 8000)
}

function nextSlide() {
    if (carSlideIndex < carSlides.length - 1) {
        carSlides[carSlideIndex].classList.remove('home__carousel__active__slide')
        carSlideIndex = carSlideIndex + 1;
        carSlides[carSlideIndex].classList.add('home__carousel__active__slide')
        resetAutoplay()
    } else {
        carSlides[carSlideIndex].classList.remove('home__carousel__active__slide')
        carSlideIndex = 0;
        carSlides[carSlideIndex].classList.add('home__carousel__active__slide')
        resetAutoplay()
    }
}
function prevSlide() {
    if (carSlideIndex > 0) {
        carSlides[carSlideIndex].classList.remove('home__carousel__active__slide')
        carSlideIndex = carSlideIndex - 1;
        carSlides[carSlideIndex].classList.add('home__carousel__active__slide')
        resetAutoplay()
    } else {
        carSlides[carSlideIndex].classList.remove('home__carousel__active__slide')
        carSlideIndex = carSlides.length - 1;
        carSlides[carSlideIndex].classList.add('home__carousel__active__slide')
        resetAutoplay()
    }
}
function autoplayCarSlides() {
    if (carSlideIndex < carSlides.length - 1) {
        carSlides[carSlideIndex].classList.remove('home__carousel__active__slide')
        carSlideIndex = carSlideIndex + 1;
        carSlides[carSlideIndex].classList.add('home__carousel__active__slide')
    } else {
        carSlides[carSlideIndex].classList.remove('home__carousel__active__slide')
        carSlideIndex = 0;
        carSlides[carSlideIndex].classList.add('home__carousel__active__slide')
    }
}