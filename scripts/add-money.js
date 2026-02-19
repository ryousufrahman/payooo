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

        const transectionAddMoney =document.getElementById('transection-histroy-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML =`
           <div class=" py-3 px-6 bg-white  rounded-full mb-3">
           New transfer has created from ${bankName} amount of ${amountToAdd} at ${new Date()}
          </div>
        
        
        `;
        transectionAddMoney.appendChild(newHistory);
         

    }
    else{
        alert('invalid pin')
    }
})