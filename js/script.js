'use strict';

const typed = new Typed('#element', {
    strings: ['Frontend Developer'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

const hamburger = document.querySelector('.hamburger'),
      navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(e => e.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

let circularProgress = document.querySelector('.circular-progress-html'),
    progressValue = document.querySelector('.progress-value-html'),
    circularProgressCSS = document.querySelector('.circular-progress-css'),
    progressValueCSS = document.querySelector('.progress-value-css'),
    circularProgressJS = document.querySelector('.circular-progress-js'),
    progressValueJS = document.querySelector('.progress-value-js');

let progressStartValue = 0,
    progressEndValue = 90,
    speed = 10;
let progressStartValueCSS = 0,
    progressEndValueCSS = 90,
    speedCSS = 10;
let progressStartValueJS = 0,
    progressEndValueJS = 70,
    speedJS = 10;

function updateProgress(progressStartValue, progressEndValue, progressValue, circularProgress, speed) {
    let progress = setInterval(() => {
        progressStartValue++;
    
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient( #0057FF ${progressStartValue * 3.6}deg, #ededed 0deg )`;
    
    if(progressStartValue == progressEndValue){
            clearInterval(progress);
        }
    }, speed);
}

updateProgress(progressStartValue, progressEndValue, progressValue, circularProgress, speed);
updateProgress(progressStartValueCSS, progressEndValueCSS, progressValueCSS, circularProgressCSS, speedCSS);
updateProgress(progressStartValueJS, progressEndValueJS, progressValueJS, circularProgressJS, speedJS);