let lostEM_2 = document.querySelector('.lostEM_2');

let lostBtn2 = document.querySelector('.lostBtn2');
let lostBtn3 = document.querySelector('.lostBtn3');

lostBtn2.addEventListener('click', () => {
    lostEM_2.style.display = 'block';
    console.log('it worked!');
});

lostBtn3.addEventListener('click', () => {
    lostEM_2.style.display = 'none';
    console.log('reset workd!');
});