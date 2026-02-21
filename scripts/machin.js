function getValueFromInput(id) {
  const theInputElement = document.getElementById(id);
  const theInputValue = theInputElement.value;
 return theInputValue;
    
}
function balenceInNumber (){
const balenceElement =document.getElementById('balance');
const balance = balenceElement.innerText;
 return Number(balance);

}
function setBalence(value) {
    const balenceElement =document.getElementById('balance')
    balenceElement.innerText = value
    
}

function hideSection(id){

   const cashOut = document.getElementById('cash-out-section');
   const addMoney = document.getElementById('add-money-section');
   const tranferMoney = document.getElementById('transfer-section');
   const transectionSection = document.getElementById('transection-section')
   const payBillSection = document.getElementById('pay-bill-section')

   addMoney.classList.add('hidden');
   cashOut.classList.add('hidden');
   tranferMoney.classList.add('hidden');
   transectionSection.classList.add('hidden')
   payBillSection.classList.add('hidden')

   const selected =document.getElementById(id)

   selected.classList.remove('hidden')

}