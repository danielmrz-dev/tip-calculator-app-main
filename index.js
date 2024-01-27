const percentage = [];
const labels = [];
for (let i = 0; i <= 5; i++) {
    percentage.push(document.getElementById(`percent${i}`));
    labels.push(document.getElementById(`label${i}`));    
}

let chosenPercentage = '';
function escolherPorcentagem(chosen, notChosen1, notChosen2, notChosen3, notChosen4) {
    if (percentage[chosen].checked) {
        labels[chosen].style.background = '#934ef5';
        labels[chosen].style.color = '#28004d';
        labels[notChosen1].style.background = '';
        labels[notChosen1].style.color = '';        
        labels[notChosen2].style.background = '';
        labels[notChosen2].style.color = '';        
        labels[notChosen3].style.background = '';
        labels[notChosen3].style.color = '';        
        labels[notChosen4].style.background = '';
        labels[notChosen4].style.color = '';    
        customPercent.value = ''    ;
    }
    if (percentage[1].checked) {
        chosenPercentage = 0.05;
    } else if (percentage[2].checked) {
        chosenPercentage = 0.1;
    } else if (percentage[3].checked) {
        chosenPercentage = 0.15;
    } else if (percentage[4].checked) {
        chosenPercentage = 0.25;
    } else if (percentage[5].checked) {
        chosenPercentage = 0.5;
    }
}

const bill = document.getElementById('bill');
const numberOfPeople = document.getElementById('people');
const resultPerPerson = document.querySelector('.result-per-person');
const resultTotal = document.querySelector('.result-total');
let customPercent = document.querySelector('.custom-percent');
const errorMsgPeople = document.querySelector('.error-msg-people');
const errorMsgBill = document.querySelector('.error-msg-bill');

function calculate() {
    if (numberOfPeople.value.length == 0) {
        errorMsgPeople.style.opacity = '1'; 
        numberOfPeople.style.outline = '2px solid red';
    } else {
        errorMsgPeople.style.opacity = '0'; 
        numberOfPeople.style.outline = '';
    }

    if (bill.value.length == 0) {
        errorMsgBill.style.opacity = '1'; 
        bill.style.outline = '2px solid red';
    } else {
        errorMsgBill.style.opacity = '0'; 
        bill.style.outline = '';
    }
    
    if (bill.value.length != 0 && numberOfPeople.value.length !=0) {
        errorMsgPeople.style.opacity = '0';
        errorMsgBill.style.opacity = '0';
        numberOfPeople.style.outline = '';
        bill.style.outline = '';
        if (customPercent.value.length == 0) {        
            let tipAmount = `${(parseFloat(bill.value * chosenPercentage)) / numberOfPeople.value}`;
            resultPerPerson.innerHTML = `$${parseFloat(tipAmount).toFixed(2)}`;
            
            let total = `${(parseFloat(bill.value) + (bill.value * chosenPercentage)) / numberOfPeople.value}`;
            resultTotal.innerHTML = `$${parseFloat(total).toFixed(2)}`;
        }  else {
            let customTipAmount = `${(parseFloat(bill.value * (customPercent.value * 0.01)) / numberOfPeople.value)}`;
            resultPerPerson.innerHTML = `$${parseFloat(customTipAmount).toFixed(2)}`;
    
            let customTotal = `${(parseFloat(bill.value) + (parseFloat(bill.value) * (customPercent.value / 100))) / numberOfPeople.value}`;
            resultTotal.innerHTML = `$${parseFloat(customTotal).toFixed(2)}`;    
        }      
    }    
}


function reset() {
    bill.value = '';
    numberOfPeople.value = '';
    customPercent.value = '';
    resultPerPerson.innerHTML = '$0';
    resultTotal.innerHTML = '$0';
    errorMsgBill.style.opacity = '0';
    errorMsgPeople.style.opacity = '0';
    bill.style.outline = '';
    numberOfPeople.style.outline = '';
    chosenPercentage = 0;

    for (let i = 1; i <= 5; i++) {
        percentage[i].checked = false;
        labels[i].style.background = '';
        labels[i].style.color = '';
    }
}

customPercent.addEventListener("focus", function() {
    for (let i = 1; i <= 5; i++) {
        percentage[i].checked = false;
        labels[i].style.background = '';
        labels[i].style.color = '';
    }
});