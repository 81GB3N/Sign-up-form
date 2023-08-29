document.addEventListener('input', e => {
    const password = document.getElementById('password').value;
    const confPassword = document.getElementById('confirm-password').value;
    if(password != confPassword){
         document.querySelector('.password-match').style.color = 'red';
     }
     else{
        document.querySelector('.password-match').style.color = 'white';
     }
})