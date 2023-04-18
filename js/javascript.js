let lostBtn_1 = document.querySelector('.lostBtn_1');
let lostEM_2 = document.querySelector('.lostEM_2');
let page_1 = document.querySelector('.page_1');
let resetButton = document.querySelector('.resetButton');
let supportInfo = document.querySelector('.supportInfo');
let loginBtn1 = document.querySelector('.loginBtn1');
let carLog = document.querySelector('.carLog');
let leftArrow = document.querySelector('.leftArrow');
let bottom = document.querySelector('.bottom');
let car_list = document.querySelector('.car_list');
let plusIcon = document.querySelector('.plusIcon');

let doneCancel = document.getElementById('doneCancel');
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

loginBtn1.addEventListener('click', ()=> {
    carLog.classList.add('showCarLog');
});

leftArrow.addEventListener('click', ()=> {
    carLog.classList.remove('showCarLog');
    console.log('left arrow');
    car_list.style.visibility = 'hidden';
});
plusIcon.addEventListener('click', ()=> {
    plusIcon.style.visibility = 'hidden';
    car_list.style.visibility = 'visible';
    doneCancel.style.visibility = 'visible';

});

let table = document.querySelector('#table');
let tableBody = '';


doneCancel.addEventListener('click', ()=> {
    let nameInput   = document.querySelector('#nameInput').value;
    let carInput    = document.querySelector('#carInput').value;
    let modelInput  = document.querySelector('#modelInput').value;
    let colorInput  = document.querySelector('#colorInput').value;
    let plateInput  = document.querySelector('#plateInput').value;
    let numberInput = document.querySelector('#numberInput').value;

    let tr = document.createElement('tr');
    let text = '';

    console.log(nameInput, carInput, modelInput, colorInput, plateInput, numberInput);

    if(nameInput == '' || carInput == '' || modelInput == '' || colorInput == '' || plateInput == '' || numberInput == '') {
        alert('Please field in your car information!');
        // text += '</tr>' + '<tr>' + '<td>' + nameInput + '</td>' + '  ' + '<td>' + carInput + '</td>' + '  ' + '<td>' + modelInput + '</td>' + '  ' + '<td>' + colorInput + '</td>' + '  ' + '<td>' + plateInput + '</td>' + '  ' + '<td>' + numberInput + '</td>' + '</tr>';

    } else {
        // alert('Please field in your car information!');

        text += '</tr>' + '<tr>' + '<td>' + nameInput + '</td>' + '  ' + '<td>' + carInput + '</td>' + '  ' + '<td>' + modelInput + '</td>' + '  ' + '<td>' + colorInput + '</td>' + '  ' + '<td>' + plateInput + '</td>' + '  ' + '<td>' + numberInput + '</td>' + '</tr>';
       
    }

    tr.innerHTML = text;
    table.appendChild(tr);

    console.log(table);
});