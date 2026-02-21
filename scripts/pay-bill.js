document.getElementById('pay-bill-btn').addEventListener('click', function(){

    const payService = getValueFromInput('pay-service-option');
    if(payService==='Select A Service'){
        alert ('Select a service');
        return;
    }
    const paybillNumber = getValueFromInput('pay-bill-number');
    if(paybillNumber.length !=11){
        alert ('type a valid number')
        return
    }
    
    const amountTyped = getValueFromInput('amount-to-pay')
    if(amountTyped> balenceInNumber()){
        alert('Insufficient balence');
        return
    }
    
    const payBillPin =getValueFromInput('pay-bill-pin')
    if(payBillPin==='1234'){
        alert('succecfull');
        const newBalence = balenceInNumber() - amountTyped;
        setBalence(newBalence)

        const transectionAddMoney =document.getElementById('transection-histroy-container');
        const newHistory = document.createElement('div');
        newHistory.innerHTML =`
           <div class=" py-3 px-6 bg-white  rounded-full mb-3">
          <span class ="text-2xl text-green-500 font-bold">   paybill of ${payService} has send  </span>
             <br> to ${paybillNumber}  amount of ${amountTyped} at ${new Date()}
          </div>
        
        
        `;
        transectionAddMoney.appendChild(newHistory);


    }

    else{
        alerta('Invalid Pin')
    }
    
})