

let lostEM_2 = document.querySelector('.lostEM_2');

let lostBtn2 = document.querySelector('.lostBtn2');
let lostBtn3 = document.querySelector('.lostBtn3');

lostBtn2.addEventListener('click', () => {
    lostEM_2.style.width = '100%';
    lostEM_2.style.display = 'block';
    // lostEM_2.style.visibility = 'visible';

    console.log('it worked!');
});

lostBtn3.addEventListener('click', () => {
    lostEM_2.style.width = '0px';
    // lostEM_2.style.visibility = 'hidden';
    console.log('reset workd!');
});

let loginBtn = document.querySelector('.loginBtn');
let sections3 = document.querySelector('.sections3');
let sections4 = document.querySelector('.sections4');
let plusIcon = document.querySelector('.plusIcon');
let plusPopUp = document.querySelector('.plusPopUp');


loginBtn.addEventListener('click', () => {
    sections3.style.display = 'block';
    lostEM_2.style.display = 'none';
    console.log('loginBtn worked!');
});

plusIcon.addEventListener('click', () => {
    plusPopUp.style.display = 'block';
    console.log('hello');
});


let done = document.querySelector('#done');
let overniteInfo = document.querySelector('.overniteInfo');

// plusPopUp.addEventListener('click', () => {
//     plusPopUp.style.display = 'none';
//     overniteInfo.style.display = 'block';
//         sections4.style.display = 'block';

// });

let leftArrow = document.querySelector('.leftArrow');

leftArrow.addEventListener('click', () => {
    sections3.style.display = 'none';
    plusPopUp.style.display = 'none';
});

//overnight 
let overnight = document.querySelector('#overnight');

overnight.addEventListener('click', () => {
    plusPopUp.style.display = 'none';
    overniteInfo.style.display = 'block';
    sections4.style.display = 'block';
    console.log('overnight hello!');
});

