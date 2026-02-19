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

         const transectionAddMoney =document.getElementById('transection-histroy-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML =`
           <div class=" py-3 px-6 bg-white  rounded-full mb-3">
           New send money has created to ${userAccount} amount of ${transferAmmount} at ${new Date()}
          </div>
        
        
        `;
        transectionAddMoney.appendChild(newHistory);
        
    }
    else{
        alert('Invalid Pin')
        return;
    }

     
})