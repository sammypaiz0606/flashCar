let lostBtn_1 = document.querySelector('.lostBtn_1');
let lostEM_2 = document.querySelector('.lostEM_2');
let page_1 = document.querySelector('.page_1');
let resetButton = document.querySelector('.resetButton');
let supportInfo = document.querySelector('.supportInfo');

let support = document.getElementById('support');

lostBtn_1.addEventListener('click', ()=> {
    lostEM_2.style.visibility = 'visible';
    lostEM_2.style.width = '100%';
    page_1.style.visibility = 'hidden';
    console.log('hello');
});

resetButton.addEventListener('click', ()=> {
    lostEM_2.style.width = '0';
    page_1.style.visibility = 'visible';
})

support.addEventListener('click', ()=> {
    supportInfo.classList.toggle('showSupport'); 
    // document.body.style.backgroundColor = '#000';
});