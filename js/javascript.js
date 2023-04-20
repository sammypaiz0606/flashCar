
let inputCar1 = document.querySelector('#inputCar1');
let inputCar2 = document.querySelector('#inputCar2');
let inputCar3 = document.querySelector('#inputCar3');
let submitBtn = document.querySelector('#submit');
let addList   = document.querySelector('.add-list');


submitBtn.addEventListener('click', () => {

    let tbl = document.querySelector('.table');
    // let th = document.createElement('th');
    // let td = document.createElement('td');
    let row = tbl.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);



    if(inputCar1.value == '' || inputCar2.value == '' || inputCar3.value == '') {
        console.log('Not good!');
        
        return false;
    }
        cell1.innerText = inputCar1.value; 
        cell2.innerText = inputCar2.value; 
        cell3.innerText = inputCar3.value; 
        console.log('it works!')


});