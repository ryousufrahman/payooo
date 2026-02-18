document.getElementById('cashOutButton').addEventListener('click', function(){
    const agentElement = document.getElementById('agentNumber').value ;
    if(agentElement.length!=11){
        alert('invalid agent number')
        return;
    }

    const balenceElement = document.getElementById('balance').innerText;
    const amountInput = document.getElementById('amount-cashOut').value;
    const balenceInNumber = Number(balenceElement);

    if(balenceInNumber - amountInput < 0){
        alert('insufficient')
        return;
    }
    
    const pinNumber = document.getElementById('login-pin').value;
    const balenceTag = document.getElementById('balance');

    if(pinNumber == '1234'){
        alert('Cash-Out Successful')
        const newBalence = balenceInNumber - amountInput;
        balenceTag.innerText = newBalence;
         
    }
    else{
        alert('Wrong password')
        
    }
    
})