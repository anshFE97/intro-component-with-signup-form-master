
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')
const fourth = document.querySelector('.fourth')


const fname = document.querySelector('.input-name')
const lname = document.querySelector('.input-last')
const email = document.querySelector('.input-mail')
const password = document.querySelector('.input-pass')

const submit = document.querySelector('.btn-submit')


function check(e) {
    if(fname.value.trim() === '' || fname.value === null) {
        first.classList.add('display')
        fname.classList.add('active')
        e.preventDefault();
    } else {
        first.classList.remove('display')
        fname.classList.remove('active')
    }

    if(lname.value.trim() === '' || lname.value === null) {
        second.classList.add('display')
        lname.classList.add('active')
        e.preventDefault();
    } else {
        second.classList.remove('display')
        lname.classList.remove('active')
    }

    if(email.value.trim() === '' || email.value === null) {
        third.classList.add('display')
        email.classList.add('active')
        e.preventDefault();
    } else if(email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        third.classList.remove('display')
        email.classList.remove('active')
    } else {
        return
    }

    if(password.value.trim() === '' || password.value === null || password.value.length < 8) {
        fourth.classList.add('display')
        password.classList.add('active')
        e.preventDefault();
    } else {
        fourth.classList.remove('display')
        password.classList.remove('active')
    }

    setter()
}


submit.addEventListener('click', check)



fname.addEventListener('click', function setter() { 
    first.classList.remove('display')
    fname.classList.remove('active')
}
)

lname.addEventListener('click', function setter() { 
    second.classList.remove('display')
    lname.classList.remove('active')
}
)

email.addEventListener('click', function setter() { 
    third.classList.remove('display')
    email.classList.remove('active')
}
)

password.addEventListener('click', function setter() { 
    fourth.classList.remove('display')
    password.classList.remove('active')
}
)

