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


plusPopUp.addEventListener('click', () => {
    plusPopUp.style.display = 'none';
});


