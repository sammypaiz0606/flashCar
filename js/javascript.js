let loginBtn1   = document.querySelector('.button_1');
let loginBtn2   = document.querySelector('.button_2');
let loginBtn3   = document.querySelector('.button_3');


let slideLeft   = document.querySelector('slideLeft');


let loginClick1 = document.querySelector('.loginClick1');
let loginClick2 = document.querySelector('.loginClick2');
let loginClick3 = document.querySelector('.loginClick3');

loginBtn1.addEventListener('click', () => {
    loginClick1.style.display = 'block';
});



loginClick1.addEventListener('click', () => {
    loginClick1.style.display = 'none';
});


let lostEmail = document.querySelector('.lostEmail');

loginBtn2.addEventListener('click', () => {
    lostEmail.style.width = '100%';
    lostEmail.style.display = 'block';
    console.log('it workd!');

});

loginBtn3.addEventListener('click', () => {
    lostEmail.style.width = '0';
    lostEmail.style.display = 'none';

});