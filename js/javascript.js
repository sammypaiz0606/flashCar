let lostBtn_1 = document.querySelector('.lostBtn_1');
let lostEM_2 = document.querySelector('.lostEM_2');
let page_1 = document.querySelector('.page_1');
let resetButton = document.querySelector('.resetButton');
let supportInfo = document.querySelector('.supportInfo');
let leftArrow = document.querySelector('.leftArrow');
let bottom = document.querySelector('.bottom');
let car_List = document.querySelector('.car_List');
let plusIcon = document.querySelector('.plusIcon');

let done = document.getElementById('done');


let loginBtn1 = document.querySelector('.loginBtn1');
let carLog = document.querySelector('.carLog');
let popUp = document.querySelector('.popUp');

loginBtn1.addEventListener('click', ()=> {
    carLog.classList.toggle('showCarLog');
     // popUp.classList.toggle('showPopUp');
    popUp.style.visibility = 'visible';
    popUp.style.height = '200px';
});

lostBtn_1.addEventListener('click', ()=> {
    lostEM_2.style.visibility = 'visible';
    lostEM_2.style.width = '100%';
    page_1.style.visibility = 'hidden';
    console.log('hello');
});

resetButton.addEventListener('click', ()=> {
    lostEM_2.style.width = '0';
    page_1.style.visibility = 'visible';
});

// Support section
let support = document.getElementById('support');

support.addEventListener('click', ()=> {
    supportInfo.classList.toggle('showSupport'); 
    // document.body.style.backgroundColor = '#000';
});


leftArrow.addEventListener('click', ()=> {
    carLog.classList.remove('showCarLog');
    car_List.style.visibility = 'hidden';
    carList.classList.toggle('carList');
});


// Entry button
let carList = document.querySelector('.carList');
let entry = document.getElementById('entry');

entry.addEventListener('click', ()=> {
    car_List.style.visibility = 'visible'; 
    popUp.style.visibility = 'hidden';
    carList.style.visibility = 'hidden';
});

// Cancel button 
let cancel = document.getElementById('cancel');

cancel.addEventListener('click', () => {
    popUp.style.visibility = 'hidden';
});

// New Table Car entry
let table = document.querySelector('#table');
let tableBody = '';


plusIcon.addEventListener('click', ()=> {
    carList.style.visibility = 'visible';
    // plusIcon.classList.toggle('showPlusIcon');
    // plusIcon.style.visibility = 'visible';
    popUp.style.visibility = 'hidden';
    done.style.visibility = 'hidden';
    car_List.style.visibility = 'visible';
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