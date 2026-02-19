document.getElementById('send-money-Button').addEventListener('click', function(){
    const userAccount = getValueFromInput('transferAgentNumber');
    if(userAccount.length!= 11){
        alert('Invalid User Number')
        return;
    }
    const transferAmmount = getValueFromInput('amount-transfer');
    const balance = balenceInNumber();
    if(balance<transferAmmount){
        alert('Insufficient balence')
        return;
    }
    const transferpin = getValueFromInput('transfer-pin');
    if(transferpin==='1234'){
        alert('Send money successful')
        const newBalence = balenceInNumber() - transferAmmount
        setBalence(newBalence);
        
    }
    else{
        alert('Invalid Pin')
        return;
    }

     
})