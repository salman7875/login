'use strict';

const email = document.querySelector('#email');
const password = document.querySelector('#password');
const alert = document.querySelector('.warning');
const btn = document.querySelector('.btn');

const onClick = function() {
    if (email.value === 'imsalman76@gmail.com' && password.value === 'password') {
        alert.style.visibility = 'visible';
        alert.innerHTML = 'Logged In Successfully';
        alert.style.color = 'lightgreen';
        document.querySelector('.container').style.border = '1px solid green';
    } else if (email.value === '') {
        alert.style.visibility = 'visible';
        alert.innerHTML = 'Enter your email address';
        alert.style.color = 'red'; 
        email.style.border = '1px solid red'; 
    } else if (email.value !== 'imsalman76@gmail.com') {
        alert.style.visibility = 'visible';
        alert.innerHTML = 'Invalid Email!';
        alert.style.color = 'red';
        email.style.border = '1px solid red';
    } else if (password.value !== 'password') {
        alert.style.visibility = 'visible';
        alert.innerHTML = 'Incorrect Password!';
        alert.style.color = 'red';
        password.style.border = '1px solid red';
    } else {
        alert.style.visibility = 'visible';
        alert.innerHTML = 'Internal Error';
        alert.style.color = 'yellow';
    }
}

btn.addEventListener('click', onClick);