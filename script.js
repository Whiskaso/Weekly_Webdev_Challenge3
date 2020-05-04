// DECREASING THE SIZE OF HEADER WHEN SCROLL 

window.addEventListener('scroll', () => {
    const header = document.querySelector('.main-header');
    const container = document.querySelector('.header_flex-container');
    if (window.scrollY > 80) {
        header.style.height = '80px';
        container.style.height = '80px';
    } else if (window.scrollY == 0) {
        header.style.height = '110px';
        container.style.height = '110px';
    }
})

// OVERLAY MENU 

const overlayStart = document.querySelector('.dropdown');
const overlayClose = document.querySelector('.closebtn');

overlayStart.addEventListener('click', () => {
    document.getElementById("overlayNavBar").style.height = "100%";
})

overlayClose.addEventListener('click', () => {
    document.getElementById("overlayNavBar").style.height = "0%";
})