"use strict"
//________________________________________________________________
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
const registerButton = document.getElementById('registerButton');
const successMessage = document.getElementById('successMessage');

// ____________________________________________________________________
function validateRequiredFields() {
    let isValid = true;

    //________________________________________________________________________
    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }

    // ________________________________________________________________________
    if (password.value.trim() === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // __________________________________________
    if (confirmPassword.value.trim() === "") {
        confirmPasswordError.textContent = "Confirm password is required";
        isValid = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    return isValid;
}

// ____________________________________________
function validatePasswordMatch() {
    let passwordsMatch = true;

    if (password.value !== confirmPassword.value) {
        confirmPasswordError.textContent = "Passwords do not match";
        passwordsMatch = false;
    } else {
        confirmPasswordError.textContent = "";
    }

    return passwordsMatch;
}

// ____________________________________________________
function toggleRegisterButton() {
    if (validateRequiredFields() && validatePasswordMatch()) {
        registerButton.disabled = false;  
    } else {
        registerButton.disabled = true;   
    }
}

//__________________________________________________________
username.addEventListener('input', toggleRegisterButton);
password.addEventListener('input', toggleRegisterButton);
confirmPassword.addEventListener('input', toggleRegisterButton);

// ________________________________________________
registerButton.addEventListener('click', function () {
    if (validateRequiredFields() && validatePasswordMatch()) {
        successMessage.textContent = "User successfully registered!";
    } else {
        successMessage.textContent = " ";
    }
});