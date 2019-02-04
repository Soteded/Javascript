'use strict';

const myBtn = document.querySelector('#js-btn');
myBtn.addEventListener('click', (event) => {
    console.log('Clicked', event);
});

let isClicked = false;
const myGrayBtn = document.querySelector('#js-gray-btn')
myGrayBtn.addEventListener('click', () => {
    isClicked = !isClicked;
    if (isClicked){
        myGrayBtn.style.backgroundColor = 'green';
    } else {
        myGrayBtn.style.backgroundColor = 'gray';
    }
});

const hoveredBtn = document.querySelector('#js-hovered-btn');
hoveredBtn.addEventListener('mouseenter', () => {
    hoveredBtn.style.backgroundColor = 'red';
});
hoveredBtn.addEventListener('mouseleave', () => {
    hoveredBtn.style.backgroundColor = 'initial';
});

window.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    console.log('Mouse right button is clicked');
});

const myForm = document.querySelector('#js-form');
const myInput = document.querySelector('#js-input');

myInput.addEventListener('keyup', (e) => {
    console.log('e',e);
    console.log('input value : ', myInput.value);
});

myForm.addEventListener('submit', (e) => {
    event.preventDefault();
    if (myInput.value){
        alert(`Your input is : ${myInput.value}`);
    }
});