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