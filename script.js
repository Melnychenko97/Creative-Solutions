'use strict';

class Slider {
    constructor(leftButton, rightButton, itemsList) {
        this.leftButton = leftButton;
        this.rightButton = rightButton;
        this.itemsList = itemsList;
        this.LAST_ITEM = 2;
        this.FIRST_ITEM = 0;
    }
    get createSlider() {
        let itemPositionCounter = 0;
        const LAST_ITEM = this.LAST_ITEM;
        const FIRST_ITEM = this.FIRST_ITEM;
        const itemsList = this.itemsList;

        this.rightButton.addEventListener('click', function () {
            console.log(itemPositionCounter);
            if (itemPositionCounter === LAST_ITEM) {
                itemsList[itemPositionCounter].classList.remove('active');
                itemsList[FIRST_ITEM].classList.add('active');
                itemPositionCounter = 0;
            } else {
                itemsList[itemPositionCounter].classList.remove('active');
                itemsList[itemPositionCounter].nextElementSibling.classList.add('active');
                itemPositionCounter++;
            }
        });

        this.leftButton.addEventListener('click', function () {
            if (itemPositionCounter === FIRST_ITEM) {
                itemsList[FIRST_ITEM].classList.remove('active');
                itemsList[LAST_ITEM].classList.add('active');
                itemPositionCounter = 2;
            } else {
                itemsList[itemPositionCounter].classList.remove('active');
                itemsList[itemPositionCounter].previousElementSibling.classList.add('active');
                itemPositionCounter--;
            }
        });
    }
}

const moveRight = document.querySelector('.works__arrow-right');
const moveLeft = document.querySelector('.works__arrow-left');
const itemsList = document.querySelectorAll('.works__carouselItem');

const workSlider = new Slider(moveLeft, moveRight, itemsList);
workSlider.createSlider;

const goLeft = document.querySelector('.team__arrow-left');
const goRight = document.querySelector('.team__arrow-right');
const itemWrapperList = document.querySelectorAll('.team__itemWrapper');

const teamSlider = new Slider (goLeft, goRight, itemWrapperList);
teamSlider.createSlider;


const anchors = document.querySelectorAll('a[href*="#"]');
const hamburger = document.querySelector('.navigation__button');

for (let anchor of anchors) {

    anchor.addEventListener('click', function (event) { // makes smooth scrolling to the element
        event.preventDefault();
        hamburger.classList.toggle('active');
        const sectionName = anchor.getAttribute('href').slice(1);
        document.querySelector(`.${sectionName}`).scrollIntoView({
            behavior: 'smooth',
            block: 'end'
        });
    });
}

// const hamburger = document.querySelector('.navigation__button');
const menu = document.querySelector('.navigation-m');

hamburger.addEventListener('click', function (event) { // hamburger actions
    this.classList.toggle('active');
    menu.classList.toggle('active');
    event.stopPropagation();

});
document.body.addEventListener('click', () =>{
   menu.classList.remove('active');
});

const expandButton = document.querySelector('.about__button');
const hiddenInfo = document.querySelector('.about__info-hidden');
const sectionAbout = document.querySelector('.about');

expandButton.addEventListener('click', () => { // expand button in section "about"
    sectionAbout.classList.toggle('active');
    hiddenInfo.classList.toggle('active');
});



const goUp = document.querySelector('.move-to-top');

window.addEventListener('scroll', () => { // scroll to top
    if (document.documentElement.scrollTop > 300) {
        goUp.classList.add('active');
    } else {
        goUp.classList.remove('active');
    }
    if (document.documentElement.scrollTop > 3066) {
        goUp.classList.add('fixedPosition');
    } else {
        goUp.classList.remove('fixedPosition');
    }
});

goUp.addEventListener('click', (event) => {
    event.preventDefault();
    document.querySelector(`.header`).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
});

function initMap() {// map in contact section
    const location = {lat: 46.482525, lng: 30.723309};

    const map = new google.maps.Map(document.querySelector('.contact__map'), {
        zoom: 14,
        center: location
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

const contactButtons = document.querySelectorAll('.contact__button');// slides contact info

for (let button of contactButtons) {
    button.addEventListener('click', function() {
        button.parentElement.classList.toggle('active');
    });
}

const form = document.querySelector('form');
const message = document.querySelector('.contact__message');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    this.style.display = 'none';
    message.style.display = 'flex';

});