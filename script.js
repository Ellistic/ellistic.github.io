// FADE

const fadeEl = document.querySelector('.fade');

let hasScrolled = false;
window.addEventListener('scroll', () => {
    if (!hasScrolled) {
        fadeEl.style.opacity = '0.5';
        hasScrolled = true;
    }
});


// NAV BUTTONS HIDE ON SMALLER SCREENS

const nav = document.querySelector('nav');
const btns = document.querySelectorAll('.btn');
const threshold = 1550;
const showBtnsThreshold = 203;

window.addEventListener('scroll', () => {
    if (window.innerWidth <= threshold) {
        if (window.pageYOffset > threshold) {
            nav.classList.add('scrolled');
            btns.forEach(btn => btn.style.display = 'none');
        } else {
            nav.classList.remove('scrolled');
            if (window.pageYOffset > showBtnsThreshold) {
                btns.forEach(btn => btn.style.display = 'none');
            } else {
                btns.forEach(btn => btn.style.display = 'block');
            }
        }
    } else {
        nav.classList.remove('scrolled');
        btns.forEach(btn => btn.style.display = 'block');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= threshold) {
        if (window.pageYOffset < showBtnsThreshold) {
            nav.classList.remove('scrolled');
            btns.forEach(btn => btn.style.display = 'block');
        } else if (window.pageYOffset > threshold) {
            nav.classList.add('scrolled');
            btns.forEach(btn => btn.style.display = 'none');
        }
    } else {
        nav.classList.remove('scrolled');
        btns.forEach(btn => btn.style.display = 'block');
    }
});


// NAVBAR LOGO HIDE ON SCROLL

// get the logo element
const logo = document.querySelector('.personal-logo');

// add an event listener to the window object to detect scrolling
window.addEventListener('scroll', () => {
    // get the current scroll position
    const scrollPosition = window.scrollY;

    // get the height of the viewport
    const viewportHeight = window.innerHeight;

    // check if the scroll position is greater than or equal to the viewport height
    if (scrollPosition >= viewportHeight / 4) {
        // if it is, show the logo
        logo.classList.add("logo-hidden");
    } else {
        // if it's not, hide the logo
        logo.classList.remove("logo-hidden");
    }
});


// HIDE BACK ARROW ON SCROLL
let goback = document.querySelector(".back-arrow");
let lastScroll = window.scrollY;

window.addEventListener("scroll", () => {
    if (goback !== null) {
        if (lastScroll < window.scrollY) {
            goback.classList.add("back-arrow-hidden");
        } else {
            goback.classList.remove("back-arrow-hidden");
        }
    }

    lastScroll = window.scrollY;
});

// TO-TOP BUTTON

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
});



// FILTERS
const filtersEl = document.querySelector('.filters');
const projectEl1 = document.querySelector('.project:nth-child(1)');
const projectEl2 = document.querySelector('.project:nth-child(2)');
const projectEl3 = document.querySelector('.project:nth-child(3)');
const projectEl4 = document.querySelector('.project:nth-child(4)');
const projectEl5 = document.querySelector('.project:nth-child(5)');
const projectEl6 = document.querySelector('.project:nth-child(6)');
const projectEl7 = document.querySelector('.project:nth-child(7)');
const projectEl8 = document.querySelector('.project:nth-child(8)');
const projectEl9 = document.querySelector('.project:nth-child(9)');
const projectEl10 = document.querySelector('.project:nth-child(10)');
const projectEl11 = document.querySelector('.project:nth-child(11)');
const projectEl12 = document.querySelector('.project:nth-child(12)');
const projectEl13 = document.querySelector('.project:nth-child(13)');
const projectEl14 = document.querySelector('.project:nth-child(14)');
const projectEl15 = document.querySelector('.project:nth-child(15)');
const projectEl16 = document.querySelector('.project:nth-child(16)');
const projectEl17 = document.querySelector('.project:nth-child(17)');
const projectEl18 = document.querySelector('.project:nth-child(18)');
const projectEl19 = document.querySelector('.project:nth-child(19)');
const projectEl20 = document.querySelector('.project:nth-child(20)');
const projectEl21 = document.querySelector('.project:nth-child(21)');
const projectEl22 = document.querySelector('.project:nth-child(22)');
const projectEl23 = document.querySelector('.project:nth-child(23)');
const projectEl24 = document.querySelector('.project:nth-child(24)');
const projectEl25 = document.querySelector('.project:nth-child(25)');
const projectEl26 = document.querySelector('.project:nth-child(26)');
const projectEl27 = document.querySelector('.project:nth-child(27)');
const projectEl28 = document.querySelector('.project:nth-child(28)');
const projectEl29 = document.querySelector('.project:nth-child(29)');
const projectEl30 = document.querySelector('.project:nth-child(30)');
const projectEl31 = document.querySelector('.project:nth-child(31)');
const projectEl32 = document.querySelector('.project:nth-child(32)');
const projectEl33 = document.querySelector('.project:nth-child(33)');
const projectEl34 = document.querySelector('.project:nth-child(34)');
const projectEl35 = document.querySelector('.project:nth-child(35)');
const projectEl36 = document.querySelector('.project:nth-child(36)');
const projectEl37 = document.querySelector('.project:nth-child(37)');
const htmlEl = document.querySelector('html');

filtersEl.addEventListener('click', e => {
    // remove fade
    fadeEl.style.opacity = '0';

    // make clicked button active
    document.querySelector('.filter-btn--active').classList.remove('filter-btn--active');
    e.target.classList.add('filter-btn--active');

    // change image opacities
    htmlEl.style.setProperty('--default-opacity', '0.4');
    htmlEl.style.setProperty('--hover-opacity', '0.3');

    // reorganize grid
    const filterText = e.target.textContent;


    if (filterText === 'All') {

        projectEl1.style.display = 'initial';
        projectEl1.style.transform = 'scale(1)';
        projectEl2.style.display = 'initial';
        projectEl2.style.transform = 'scale(1)';
        projectEl3.style.display = 'initial';
        projectEl3.style.transform = 'scale(1)';
        projectEl4.style.display = 'initial';
        projectEl4.style.transform = 'scale(1)';
        projectEl5.style.display = 'initial';
        projectEl5.style.transform = 'scale(1)';
        projectEl6.style.display = 'initial';
        projectEl6.style.transform = 'scale(1)';
        projectEl7.style.display = 'initial';
        projectEl7.style.transform = 'scale(1)';
        projectEl8.style.display = 'initial';
        projectEl8.style.transform = 'scale(1)';
        projectEl9.style.display = 'initial';
        projectEl9.style.transform = 'scale(1)';
        projectEl10.style.display = 'initial';
        projectEl10.style.transform = 'scale(1)';
        projectEl11.style.display = 'initial';
        projectEl11.style.transform = 'scale(1)';
        projectEl12.style.display = 'initial';
        projectEl12.style.transform = 'scale(1)';
        projectEl13.style.display = 'initial';
        projectEl13.style.transform = 'scale(1)';
        projectEl14.style.display = 'initial';
        projectEl14.style.transform = 'scale(1)';
        projectEl15.style.display = 'initial';
        projectEl15.style.transform = 'scale(1)';
        projectEl16.style.display = 'initial';
        projectEl16.style.transform = 'scale(1)';
        projectEl17.style.display = 'initial';
        projectEl17.style.transform = 'scale(1)';
        projectEl18.style.display = 'initial';
        projectEl18.style.transform = 'scale(1)';
        projectEl19.style.display = 'initial';
        projectEl19.style.transform = 'scale(1)';
        projectEl20.style.display = 'initial';
        projectEl20.style.transform = 'scale(1)';
        projectEl21.style.display = 'initial';
        projectEl21.style.transform = 'scale(1)';
        projectEl22.style.display = 'initial';
        projectEl22.style.transform = 'scale(1)';
        projectEl23.style.display = 'initial';
        projectEl23.style.transform = 'scale(1)';
        projectEl24.style.display = 'initial';
        projectEl24.style.transform = 'scale(1)';
        projectEl25.style.display = 'initial';
        projectEl25.style.transform = 'scale(1)';
        projectEl26.style.display = 'initial';
        projectEl26.style.transform = 'scale(1)';
        projectEl27.style.display = 'initial';
        projectEl27.style.transform = 'scale(1)';
        projectEl28.style.display = 'initial';
        projectEl28.style.transform = 'scale(1)';
        projectEl29.style.display = 'initial';
        projectEl29.style.transform = 'scale(1)';
        projectEl30.style.display = 'initial';
        projectEl30.style.transform = 'scale(1)';
        projectEl31.style.display = 'initial';
        projectEl31.style.transform = 'scale(1)';
        projectEl32.style.display = 'initial';
        projectEl32.style.transform = 'scale(1)';
        projectEl33.style.display = 'initial';
        projectEl33.style.transform = 'scale(1)';
        projectEl34.style.display = 'initial';
        projectEl34.style.transform = 'scale(1)';
        projectEl35.style.display = 'initial';
        projectEl35.style.transform = 'scale(1)';
        projectEl36.style.display = 'initial';
        projectEl36.style.transform = 'scale(1)';
        projectEl37.style.display = 'initial';
        projectEl37.style.transform = 'scale(1)';

    } else if (filterText === 'Infographics') {

        projectEl1.style.display = 'initial';
        projectEl1.style.transform = 'scale(1)';
        projectEl2.style.display = 'initial';
        projectEl2.style.transform = 'scale(1)';
        projectEl3.style.display = 'initial';
        projectEl3.style.transform = 'scale(1)';
        projectEl4.style.display = 'initial';
        projectEl4.style.transform = 'scale(1)';
        projectEl5.style.display = 'initial';
        projectEl5.style.transform = 'scale(1)';
        projectEl6.style.display = 'initial';
        projectEl6.style.transform = 'scale(1)';
        projectEl7.style.display = 'initial';
        projectEl7.style.transform = 'scale(1)';
        projectEl8.style.display = 'initial';
        projectEl8.style.transform = 'scale(1)';

        projectEl9.style.display = 'none';
        projectEl9.style.transform = 'scale(0)';
        projectEl10.style.display = 'none';
        projectEl10.style.transform = 'scale(0)';
        projectEl11.style.display = 'none';
        projectEl11.style.transform = 'scale(0)';
        projectEl12.style.display = 'none';
        projectEl12.style.transform = 'scale(0)';
        projectEl13.style.display = 'none';
        projectEl13.style.transform = 'scale(0)';
        projectEl14.style.display = 'none';
        projectEl14.style.transform = 'scale(0)';
        projectEl15.style.display = 'none';
        projectEl15.style.transform = 'scale(0)';
        projectEl16.style.display = 'none';
        projectEl16.style.transform = 'scale(0)';
        projectEl17.style.display = 'none';
        projectEl17.style.transform = 'scale(0)';
        projectEl18.style.display = 'none';
        projectEl18.style.transform = 'scale(0)';
        projectEl19.style.display = 'none';
        projectEl19.style.transform = 'scale(0)';
        projectEl20.style.display = 'none';
        projectEl20.style.transform = 'scale(0)';
        projectEl21.style.display = 'none';
        projectEl21.style.transform = 'scale(0)';
        projectEl22.style.display = 'none';
        projectEl22.style.transform = 'scale(0)';
        projectEl23.style.display = 'none';
        projectEl23.style.transform = 'scale(0)';
        projectEl24.style.display = 'none';
        projectEl24.style.transform = 'scale(0)';
        projectEl25.style.display = 'none';
        projectEl25.style.transform = 'scale(0)';
        projectEl26.style.display = 'none';
        projectEl26.style.transform = 'scale(0)';
        projectEl27.style.display = 'none';
        projectEl27.style.transform = 'scale(0)';
        projectEl28.style.display = 'none';
        projectEl28.style.transform = 'scale(0)';
        projectEl29.style.display = 'none';
        projectEl29.style.transform = 'scale(0)';
        projectEl30.style.display = 'none';
        projectEl30.style.transform = 'scale(0)';
        projectEl31.style.display = 'none';
        projectEl31.style.transform = 'scale(0)';
        projectEl32.style.display = 'none';
        projectEl32.style.transform = 'scale(0)';
        projectEl33.style.display = 'none';
        projectEl33.style.transform = 'scale(0)';
        projectEl34.style.display = 'none';
        projectEl34.style.transform = 'scale(0)';
        projectEl35.style.display = 'none';
        projectEl35.style.transform = 'scale(0)';
        projectEl36.style.display = 'none';
        projectEl36.style.transform = 'scale(0)';
        projectEl37.style.display = 'none';
        projectEl37.style.transform = 'scale(0)';


    } else if (filterText === 'Visual Identity') {
        projectEl1.style.display = 'none';
        projectEl1.style.transform = 'scale(0)';
        projectEl2.style.display = 'none';
        projectEl2.style.transform = 'scale(0)';
        projectEl3.style.display = 'none';
        projectEl3.style.transform = 'scale(0)';
        projectEl4.style.display = 'none';
        projectEl4.style.transform = 'scale(0)';
        projectEl5.style.display = 'none';
        projectEl5.style.transform = 'scale(0)';
        projectEl6.style.display = 'none';
        projectEl6.style.transform = 'scale(0)';
        projectEl7.style.display = 'none';
        projectEl7.style.transform = 'scale(0)';
        projectEl8.style.display = 'none';
        projectEl8.style.transform = 'scale(0)';
        projectEl9.style.display = 'none';
        projectEl9.style.transform = 'scale(0)';
        projectEl13.style.display = 'none';
        projectEl13.style.transform = 'scale(0)';
        projectEl14.style.display = 'none';
        projectEl14.style.transform = 'scale(0)';
        projectEl15.style.display = 'none';
        projectEl15.style.transform = 'scale(0)';
        projectEl16.style.display = 'none';
        projectEl16.style.transform = 'scale(0)';
        projectEl17.style.display = 'none';
        projectEl17.style.transform = 'scale(0)';
        projectEl18.style.display = 'none';
        projectEl18.style.transform = 'scale(0)';
        projectEl19.style.display = 'none';
        projectEl19.style.transform = 'scale(0)';
        projectEl20.style.display = 'none';
        projectEl20.style.transform = 'scale(0)';
        projectEl21.style.display = 'none';
        projectEl21.style.transform = 'scale(0)';
        projectEl22.style.display = 'none';
        projectEl22.style.transform = 'scale(0)';
        projectEl23.style.display = 'none';
        projectEl23.style.transform = 'scale(0)';
        projectEl26.style.display = 'none';
        projectEl26.style.transform = 'scale(0)';
        projectEl27.style.display = 'none';
        projectEl27.style.transform = 'scale(0)';
        projectEl28.style.display = 'none';
        projectEl28.style.transform = 'scale(0)';
        projectEl29.style.display = 'none';
        projectEl29.style.transform = 'scale(0)';
        projectEl30.style.display = 'none';
        projectEl30.style.transform = 'scale(0)';
        projectEl31.style.display = 'none';
        projectEl31.style.transform = 'scale(0)';
        projectEl32.style.display = 'none';
        projectEl32.style.transform = 'scale(0)';
        projectEl34.style.display = 'none';
        projectEl34.style.transform = 'scale(0)';
        projectEl36.style.display = 'none';
        projectEl36.style.transform = 'scale(0)';


        projectEl10.style.display = 'initial';
        projectEl10.style.transform = 'scale(1)';
        projectEl11.style.display = 'initial';
        projectEl11.style.transform = 'scale(1)';
        projectEl12.style.display = 'initial';
        projectEl12.style.transform = 'scale(1)';
        projectEl24.style.display = 'initial';
        projectEl24.style.transform = 'scale(1)';
        projectEl25.style.display = 'initial';
        projectEl25.style.transform = 'scale(1)';
        projectEl33.style.display = 'initial';
        projectEl33.style.transform = 'scale(1)';
        projectEl35.style.display = 'initial';
        projectEl35.style.transform = 'scale(1)';
        projectEl37.style.display = 'initial';
        projectEl37.style.transform = 'scale(1)';

    } else if (filterText === 'Layout Design') {
        projectEl1.style.display = 'none';
        projectEl1.style.transform = 'scale(0)';
        projectEl2.style.display = 'none';
        projectEl2.style.transform = 'scale(0)';
        projectEl3.style.display = 'none';
        projectEl3.style.transform = 'scale(0)';
        projectEl4.style.display = 'none';
        projectEl4.style.transform = 'scale(0)';
        projectEl5.style.display = 'none';
        projectEl5.style.transform = 'scale(0)';
        projectEl6.style.display = 'none';
        projectEl6.style.transform = 'scale(0)';
        projectEl7.style.display = 'none';
        projectEl7.style.transform = 'scale(0)';
        projectEl8.style.display = 'none';
        projectEl8.style.transform = 'scale(0)';
        projectEl9.style.display = 'none';
        projectEl9.style.transform = 'scale(0)';
        projectEl10.style.display = 'none';
        projectEl10.style.transform = 'scale(0)';
        projectEl11.style.display = 'none';
        projectEl11.style.transform = 'scale(0)';
        projectEl12.style.display = 'none';
        projectEl12.style.transform = 'scale(0)';
        projectEl14.style.display = 'none';
        projectEl14.style.transform = 'scale(0)';
        projectEl15.style.display = 'none';
        projectEl15.style.transform = 'scale(0)';
        projectEl16.style.display = 'none';
        projectEl16.style.transform = 'scale(0)';
        projectEl17.style.display = 'none';
        projectEl17.style.transform = 'scale(0)';
        projectEl18.style.display = 'none';
        projectEl18.style.transform = 'scale(0)';
        projectEl19.style.display = 'none';
        projectEl19.style.transform = 'scale(0)';
        projectEl20.style.display = 'none';
        projectEl20.style.transform = 'scale(0)';
        projectEl21.style.display = 'none';
        projectEl21.style.transform = 'scale(0)';
        projectEl22.style.display = 'none';
        projectEl22.style.transform = 'scale(0)';
        projectEl23.style.display = 'none';
        projectEl23.style.transform = 'scale(0)';
        projectEl24.style.display = 'none';
        projectEl24.style.transform = 'scale(0)';
        projectEl25.style.display = 'none';
        projectEl25.style.transform = 'scale(0)';
        projectEl26.style.display = 'none';
        projectEl26.style.transform = 'scale(0)';
        projectEl27.style.display = 'none';
        projectEl27.style.transform = 'scale(0)';
        projectEl28.style.display = 'none';
        projectEl28.style.transform = 'scale(0)';
        projectEl29.style.display = 'none';
        projectEl29.style.transform = 'scale(0)';
        projectEl30.style.display = 'none';
        projectEl30.style.transform = 'scale(0)';
        projectEl31.style.display = 'none';
        projectEl31.style.transform = 'scale(0)';
        projectEl32.style.display = 'none';
        projectEl32.style.transform = 'scale(0)';
        projectEl33.style.display = 'none';
        projectEl33.style.transform = 'scale(0)';
        projectEl34.style.display = 'none';
        projectEl34.style.transform = 'scale(0)';
        projectEl35.style.display = 'none';
        projectEl35.style.transform = 'scale(0)';
        projectEl36.style.display = 'none';
        projectEl36.style.transform = 'scale(0)';
        projectEl37.style.display = 'none';
        projectEl37.style.transform = 'scale(0)';


        projectEl13.style.transform = 'scale(1)';
        projectEl13.style.display = 'initial';

    } else if (filterText === 'Print & product design') {
        projectEl1.style.display = 'none';
        projectEl1.style.transform = 'scale(0)';
        projectEl2.style.display = 'none';
        projectEl2.style.transform = 'scale(0)';
        projectEl3.style.display = 'none';
        projectEl3.style.transform = 'scale(0)';
        projectEl4.style.display = 'none';
        projectEl4.style.transform = 'scale(0)';
        projectEl5.style.display = 'none';
        projectEl5.style.transform = 'scale(0)';
        projectEl6.style.display = 'none';
        projectEl6.style.transform = 'scale(0)';
        projectEl7.style.display = 'none';
        projectEl7.style.transform = 'scale(0)';
        projectEl8.style.display = 'none';
        projectEl8.style.transform = 'scale(0)';
        projectEl9.style.display = 'none';
        projectEl9.style.transform = 'scale(0)';
        projectEl10.style.display = 'none';
        projectEl10.style.transform = 'scale(0)';
        projectEl11.style.display = 'none';
        projectEl11.style.transform = 'scale(0)';
        projectEl12.style.display = 'none';
        projectEl12.style.transform = 'scale(0)';
        projectEl13.style.display = 'none';
        projectEl13.style.transform = 'scale(0)';
        projectEl16.style.display = 'none';
        projectEl16.style.transform = 'scale(0)';
        projectEl21.style.display = 'none';
        projectEl21.style.transform = 'scale(0)';
        projectEl22.style.display = 'none';
        projectEl22.style.transform = 'scale(0)';
        projectEl23.style.display = 'none';
        projectEl23.style.transform = 'scale(0)';
        projectEl24.style.display = 'none';
        projectEl24.style.transform = 'scale(0)';
        projectEl25.style.display = 'none';
        projectEl25.style.transform = 'scale(0)';
        projectEl26.style.display = 'none';
        projectEl26.style.transform = 'scale(0)';
        projectEl28.style.display = 'none';
        projectEl28.style.transform = 'scale(0)';
        projectEl29.style.display = 'none';
        projectEl29.style.transform = 'scale(0)';
        projectEl31.style.display = 'none';
        projectEl31.style.transform = 'scale(0)';
        projectEl32.style.display = 'none';
        projectEl32.style.transform = 'scale(0)';
        projectEl33.style.display = 'none';
        projectEl33.style.transform = 'scale(0)';
        projectEl34.style.display = 'none';
        projectEl34.style.transform = 'scale(0)';
        projectEl35.style.display = 'none';
        projectEl35.style.transform = 'scale(0)';
        projectEl36.style.display = 'none';
        projectEl36.style.transform = 'scale(0)';
        projectEl37.style.display = 'none';
        projectEl37.style.transform = 'scale(0)';


        projectEl14.style.transform = 'scale(1)';
        projectEl14.style.display = 'initial';
        projectEl15.style.transform = 'scale(1)';
        projectEl15.style.display = 'initial';
        projectEl16.style.transform = 'scale(1)';
        projectEl16.style.display = 'initial';
        projectEl17.style.transform = 'scale(1)';
        projectEl17.style.display = 'initial';
        projectEl18.style.transform = 'scale(1)';
        projectEl18.style.display = 'initial';
        projectEl19.style.transform = 'scale(1)';
        projectEl19.style.display = 'initial';
        projectEl20.style.transform = 'scale(1)';
        projectEl20.style.display = 'initial';
        projectEl27.style.transform = 'scale(1)';
        projectEl27.style.display = 'initial';
        projectEl30.style.transform = 'scale(1)';
        projectEl30.style.display = 'initial';




    } else if (filterText === 'Posters') {
        projectEl1.style.display = 'none';
        projectEl1.style.transform = 'scale(0)';
        projectEl2.style.display = 'none';
        projectEl2.style.transform = 'scale(0)';
        projectEl3.style.display = 'none';
        projectEl3.style.transform = 'scale(0)';
        projectEl4.style.display = 'none';
        projectEl4.style.transform = 'scale(0)';
        projectEl5.style.display = 'none';
        projectEl5.style.transform = 'scale(0)';
        projectEl6.style.display = 'none';
        projectEl6.style.transform = 'scale(0)';
        projectEl7.style.display = 'none';
        projectEl7.style.transform = 'scale(0)';
        projectEl8.style.display = 'none';
        projectEl8.style.transform = 'scale(0)';
        projectEl9.style.display = 'none';
        projectEl9.style.transform = 'scale(0)';
        projectEl10.style.display = 'none';
        projectEl10.style.transform = 'scale(0)';
        projectEl11.style.display = 'none';
        projectEl11.style.transform = 'scale(0)';
        projectEl12.style.display = 'none';
        projectEl12.style.transform = 'scale(0)';
        projectEl13.style.display = 'none';
        projectEl13.style.transform = 'scale(0)';
        projectEl14.style.display = 'none';
        projectEl14.style.transform = 'scale(0)';
        projectEl15.style.display = 'none';
        projectEl15.style.transform = 'scale(0)';
        projectEl16.style.display = 'none';
        projectEl16.style.transform = 'scale(0)';
        projectEl17.style.display = 'none';
        projectEl17.style.transform = 'scale(0)';
        projectEl18.style.display = 'none';
        projectEl18.style.transform = 'scale(0)';
        projectEl19.style.display = 'none';
        projectEl19.style.transform = 'scale(0)';
        projectEl20.style.display = 'none';
        projectEl20.style.transform = 'scale(0)';
        projectEl21.style.display = 'none';
        projectEl21.style.transform = 'scale(0)';
        projectEl22.style.display = 'none';
        projectEl22.style.transform = 'scale(0)';
        projectEl23.style.display = 'none';
        projectEl23.style.transform = 'scale(0)';
        projectEl24.style.display = 'none';
        projectEl24.style.transform = 'scale(0)';
        projectEl25.style.display = 'none';
        projectEl25.style.transform = 'scale(0)';
        projectEl26.style.display = 'none';
        projectEl26.style.transform = 'scale(0)';
        projectEl27.style.display = 'none';
        projectEl27.style.transform = 'scale(0)';
        projectEl28.style.display = 'none';
        projectEl28.style.transform = 'scale(0)';
        projectEl29.style.display = 'none';
        projectEl29.style.transform = 'scale(0)';
        projectEl30.style.display = 'none';
        projectEl30.style.transform = 'scale(0)';
        projectEl31.style.display = 'none';
        projectEl31.style.transform = 'scale(0)';
        projectEl32.style.display = 'none';
        projectEl32.style.transform = 'scale(0)';
        projectEl33.style.display = 'none';
        projectEl33.style.transform = 'scale(0)';
        projectEl34.style.display = 'none';
        projectEl34.style.transform = 'scale(0)';
        projectEl35.style.display = 'none';
        projectEl35.style.transform = 'scale(0)';
        projectEl36.style.display = 'none';
        projectEl36.style.transform = 'scale(0)';
        projectEl37.style.display = 'none';
        projectEl37.style.transform = 'scale(0)';


        projectEl21.style.transform = 'scale(1)';
        projectEl21.style.display = 'initial';
        projectEl22.style.transform = 'scale(1)';
        projectEl22.style.display = 'initial';
        projectEl23.style.transform = 'scale(1)';
        projectEl23.style.display = 'initial';
        projectEl26.style.transform = 'scale(1)';
        projectEl26.style.display = 'initial';
        projectEl28.style.transform = 'scale(1)';
        projectEl28.style.display = 'initial';
        projectEl32.style.transform = 'scale(1)';
        projectEl32.style.display = 'initial';





    } else if (filterText === 'Web design') {
        projectEl1.style.display = 'none';
        projectEl1.style.transform = 'scale(0)';
        projectEl2.style.display = 'none';
        projectEl2.style.transform = 'scale(0)';
        projectEl3.style.display = 'none';
        projectEl3.style.transform = 'scale(0)';
        projectEl4.style.display = 'none';
        projectEl4.style.transform = 'scale(0)';
        projectEl5.style.display = 'none';
        projectEl5.style.transform = 'scale(0)';
        projectEl6.style.display = 'none';
        projectEl6.style.transform = 'scale(0)';
        projectEl7.style.display = 'none';
        projectEl7.style.transform = 'scale(0)';
        projectEl8.style.display = 'none';
        projectEl8.style.transform = 'scale(0)';
        projectEl9.style.display = 'none';
        projectEl9.style.transform = 'scale(0)';
        projectEl10.style.display = 'none';
        projectEl10.style.transform = 'scale(0)';
        projectEl11.style.display = 'none';
        projectEl11.style.transform = 'scale(0)';
        projectEl13.style.display = 'none';
        projectEl13.style.transform = 'scale(0)';
        projectEl12.style.display = 'none';
        projectEl12.style.transform = 'scale(0)';
        projectEl14.style.display = 'none';
        projectEl14.style.transform = 'scale(0)';
        projectEl15.style.display = 'none';
        projectEl15.style.transform = 'scale(0)';
        projectEl16.style.display = 'none';
        projectEl16.style.transform = 'scale(0)';
        projectEl17.style.display = 'none';
        projectEl17.style.transform = 'scale(0)';
        projectEl18.style.display = 'none';
        projectEl18.style.transform = 'scale(0)';
        projectEl19.style.display = 'none';
        projectEl19.style.transform = 'scale(0)';
        projectEl20.style.display = 'none';
        projectEl20.style.transform = 'scale(0)';
        projectEl21.style.display = 'none';
        projectEl21.style.transform = 'scale(0)';
        projectEl22.style.display = 'none';
        projectEl22.style.transform = 'scale(0)';
        projectEl23.style.display = 'none';
        projectEl23.style.transform = 'scale(0)';
        projectEl24.style.display = 'none';
        projectEl24.style.transform = 'scale(0)';
        projectEl25.style.display = 'none';
        projectEl25.style.transform = 'scale(0)';
        projectEl26.style.display = 'none';
        projectEl26.style.transform = 'scale(0)';
        projectEl27.style.display = 'none';
        projectEl27.style.transform = 'scale(0)';
        projectEl28.style.display = 'none';
        projectEl28.style.transform = 'scale(0)';
        projectEl30.style.display = 'none';
        projectEl30.style.transform = 'scale(0)';
        projectEl31.style.display = 'none';
        projectEl31.style.transform = 'scale(0)';
        projectEl32.style.display = 'none';
        projectEl32.style.transform = 'scale(0)';
        projectEl33.style.display = 'none';
        projectEl33.style.transform = 'scale(0)';
        projectEl34.style.display = 'none';
        projectEl34.style.transform = 'scale(0)';
        projectEl35.style.display = 'none';
        projectEl35.style.transform = 'scale(0)';
        projectEl36.style.display = 'none';
        projectEl36.style.transform = 'scale(0)';
        projectEl37.style.display = 'none';
        projectEl37.style.transform = 'scale(0)';



        projectEl29.style.transform = 'scale(1)';
        projectEl29.style.display = 'initial';



    } else if (filterText === 'App design') {
        projectEl1.style.display = 'none';
        projectEl1.style.transform = 'scale(0)';
        projectEl2.style.display = 'none';
        projectEl2.style.transform = 'scale(0)';
        projectEl3.style.display = 'none';
        projectEl3.style.transform = 'scale(0)';
        projectEl4.style.display = 'none';
        projectEl4.style.transform = 'scale(0)';
        projectEl5.style.display = 'none';
        projectEl5.style.transform = 'scale(0)';
        projectEl6.style.display = 'none';
        projectEl6.style.transform = 'scale(0)';
        projectEl7.style.display = 'none';
        projectEl7.style.transform = 'scale(0)';
        projectEl8.style.display = 'none';
        projectEl8.style.transform = 'scale(0)';
        projectEl9.style.display = 'none';
        projectEl9.style.transform = 'scale(0)';
        projectEl10.style.display = 'none';
        projectEl10.style.transform = 'scale(0)';
        projectEl11.style.display = 'none';
        projectEl11.style.transform = 'scale(0)';
        projectEl13.style.display = 'none';
        projectEl13.style.transform = 'scale(0)';
        projectEl12.style.display = 'none';
        projectEl12.style.transform = 'scale(0)';
        projectEl14.style.display = 'none';
        projectEl14.style.transform = 'scale(0)';
        projectEl15.style.display = 'none';
        projectEl15.style.transform = 'scale(0)';
        projectEl16.style.display = 'none';
        projectEl16.style.transform = 'scale(0)';
        projectEl17.style.display = 'none';
        projectEl17.style.transform = 'scale(0)';
        projectEl18.style.display = 'none';
        projectEl18.style.transform = 'scale(0)';
        projectEl19.style.display = 'none';
        projectEl19.style.transform = 'scale(0)';
        projectEl20.style.display = 'none';
        projectEl20.style.transform = 'scale(0)';
        projectEl21.style.display = 'none';
        projectEl21.style.transform = 'scale(0)';
        projectEl22.style.display = 'none';
        projectEl22.style.transform = 'scale(0)';
        projectEl23.style.display = 'none';
        projectEl23.style.transform = 'scale(0)';
        projectEl24.style.display = 'none';
        projectEl24.style.transform = 'scale(0)';
        projectEl25.style.display = 'none';
        projectEl25.style.transform = 'scale(0)';
        projectEl26.style.display = 'none';
        projectEl26.style.transform = 'scale(0)';
        projectEl27.style.display = 'none';
        projectEl27.style.transform = 'scale(0)';
        projectEl28.style.display = 'none';
        projectEl28.style.transform = 'scale(0)';
        projectEl29.style.display = 'none';
        projectEl29.style.transform = 'scale(0)';
        projectEl30.style.display = 'none';
        projectEl30.style.transform = 'scale(0)';
        projectEl31.style.display = 'none';
        projectEl31.style.transform = 'scale(0)';
        projectEl32.style.display = 'none';
        projectEl32.style.transform = 'scale(0)';
        projectEl33.style.display = 'none';
        projectEl33.style.transform = 'scale(0)';
        projectEl35.style.display = 'none';
        projectEl35.style.transform = 'scale(0)';
        projectEl36.style.display = 'none';
        projectEl36.style.transform = 'scale(0)';
        projectEl37.style.display = 'none';
        projectEl37.style.transform = 'scale(0)';

        projectEl34.style.transform = 'scale(1)';
        projectEl34.style.display = 'initial';
    }
});






