// login
const loginForm = document.querySelector('.auth__form.login')

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-custom-offset",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
}

const handleLogin = () => {
    const email = loginForm.querySelector('#email')
    const password = loginForm.querySelector('#password')

    if (!email.value) {
        toastr.error('Email is required')
        email.focus()
        return
    }
    if (!password.value) {
        toastr.error('Password is required')
        password.focus()
        return
    }
    if (!validateEmail(email.value)) {
        toastr.error('Email is invalid')
        email.focus()
        return
    }

    toastr.success('Login successfully')
}

if (loginForm) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault()
        handleLogin()
    })
}

// register
const registerForm = document.querySelector('.auth__form.register')

const handleRegister = () => {
    const email = registerForm.querySelector('#email')
    const password = registerForm.querySelector('#password')
    const confirmPassword = registerForm.querySelector('#confirm-password')
    const isPolicyChecked = registerForm.querySelector('#policy').checked

    if (!email.value) {
        toastr.error('Email is required')
        email.focus()
        return
    }
    if (!password.value) {
        toastr.error('Password is required')
        password.focus()
        return
    }
    if (!confirmPassword.value) {
        toastr.error('Confirm password is required')
        confirmPassword.focus()
        return
    }
    if (!validateEmail(email.value)) {
        toastr.error('Email is invalid')
        email.focus()
        return
    }
    if (password.value !== confirmPassword.value) {
        toastr.error('Password do not match')
        confirmPassword.focus()
        return
    }
    if (!isPolicyChecked) {
        toastr.error('You must agree to the terms and conditions')
        return
    }

    toastr.success('Sign up successfully')
}

if (registerForm) {
    registerForm.addEventListener('submit', e => {
        e.preventDefault()
        handleRegister()
    })
}