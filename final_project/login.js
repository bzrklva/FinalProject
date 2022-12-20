let fullName = document.querySelector("#fullName");
let email = document.querySelector("#email");
let phoneNumber = document.querySelector("#phoneNumber");
let password = document.querySelector("#password");

// registration 
let button = document.querySelector("#button")
button.addEventListener('click', () => {
    if(!email.value.includes('@')){
        alert("Invalid Email!")
    }else{
        document.querySelector('#sign-up').classList.add('hide');
        document.querySelector('#sign-in').classList.remove('hide');
        document.querySelector('.form-title').innerHTML = 'Login';
        localStorage.setItem('fullName', fullName.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('phoneNumber', phoneNumber.value);
        localStorage.setItem('password', password.value);
    }
});

// Login
let button2 = document.querySelector("#button2")
button2.addEventListener('click', () => {
    let userFullName = document.querySelector('#userFullName').value;
    let userPassword = document.querySelector('#userPassword').value;
    let localFullName = localStorage.getItem('fullName');
    let localPassword = localStorage.getItem('password');
    console.log(userFullName, userPassword, localFullName, localPassword);
    if(userFullName == localFullName && userPassword == localPassword){
        setTimeout(() => {
            document.querySelector('.form-title').innerHTML = `Hey,<span style="color: red">${localFullName}</span>`;
            document.querySelector('#sign-up').classList.add('hide');
            document.querySelector('#sign-in').classList.add('hide');
            document.querySelector('.success').classList.remove('hide');
        }, 1000)
    }else{
        alert("Invalid Password or Email!");
    }
});
