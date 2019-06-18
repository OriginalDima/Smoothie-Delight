"use strict";

// Slider is moving left
let left = 0;
let timer;
let windowSize = window.innerWidth;
const STRIPE_LENGTH = 6;
const TABLET_MAX_WIDTH = 768;
const MOBILE_MAX_WIDTH = 500;
const DESKTOP_IMAGE_SIZE = 800;
const TABLET_IMAGE_SIZE = 500;
const MOBILE_IMAGE_SIZE = 290;

autoSlide();

// To get the size of window 
document.body.onresize = function () {
    windowSize = window.innerWidth;
}

function autoSlide() {
    timer = setTimeout(function () {
        const stripe = document.getElementById('stripe');

        const imageSize =
            windowSize > TABLET_MAX_WIDTH ?
            DESKTOP_IMAGE_SIZE :
            windowSize > MOBILE_MAX_WIDTH ?
            TABLET_IMAGE_SIZE :
            MOBILE_IMAGE_SIZE;

        const stripeSize = imageSize * STRIPE_LENGTH;
        left -= imageSize;
        if (left < -stripeSize) {
            left = 0;
            clearTimeout(timer);
        }
        stripe.style.left = left + 'px';
        autoSlide();
    }, 3000);
}

// Stop slider when mouse on it
stripe.onmouseenter = function () {
    clearTimeout(timer);
}

// to continue slide moving
stripe.onmouseleave = function () {
    autoSlide();
}

// To add email to array
const arr = [];

document.forms.feedback.onsubmit = function () {
    return false;
}

document.querySelector('.feedback-body__submit').onclick = function () {
    let email = document.querySelector('.feedback-body__email').value;
    arr.push(email);
    console.log(arr);
}