document.getElementById('add-money-btn').addEventListener('click', function(){

    const bankName = getValueFromInput('bank-option')
    if(bankName==='Select A back'){
        alert('select a bank')
        return;
    }
    const bankNumber = getValueFromInput('bank-account-number');

    
    if(bankNumber.length !=11){
        alert('not a valid bank account')
        return;
    }

    const amountToAdd = getValueFromInput('amount-to-add');
    if(amountToAdd< 0){
        alert('invalid amount')
        return;
    }
    const balanceIhave = balenceInNumber();

    const addMoneyPin = getValueFromInput('add-money-pin')

    if(addMoneyPin ==='1234'){
        const newBalence = Number(amountToAdd ) +  Number(balanceIhave);
        alert('add-money-successfull')
        setBalence(newBalence);
    }
})