const myForm = document.getElementById('my-form');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();

let passwordInput = document.getElementById('password').value;
let emailInput = document.getElementById('email').value;
let msg = document.querySelector('.msg');


    if(passwordInput ===''|| emailInput ===''){
        msg.classList.add('error'); 
        msg.innerHTML = 'Please input all fields';
    } else {
        //testing
        msg.classList.add('success'); 
        msg.innerHTML = 'Registration Successful!';
    }
}