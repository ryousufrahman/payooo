document.getElementById('log-in-btn').addEventListener('click', function(){
    const contactNumber = document.getElementById('contact-number')
    const validNumber = contactNumber.value;
     const logInPin = document.getElementById('login-pin');
     const validPin = logInPin.value;

     if(validNumber=="01234567890" && validPin== '1234'){
       
        window.location.assign("./home.html")

     }
     else(
        alert('Invalid Information')
        
     )
    
})