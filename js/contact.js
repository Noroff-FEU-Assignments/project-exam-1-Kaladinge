const inputName = document.querySelector("#name");
const errorName = document.querySelector("#nameError");
const inputSubject = document.querySelector("#subject");
const errorSubject = document.querySelector("#subjectError");
const inputEmail = document.querySelector("#email");
const errorEmail = document.querySelector("#emailError");
const inputMessage = document.querySelector("#message");
const errorMessage = document.querySelector("#messageError");
const form = document.querySelector("#contactForm");
const success = document.querySelector("#success-message");


function validateForm(event) {
    event.preventDefault();

    if (lenCheck(inputName.value, 5) === true) {
        errorName.style.display = "none";
    } else {
        errorName.style.display = "block";
    }

    if (emailCheck(inputEmail.value) === true) {
        errorEmail.style.display = "none";
    } else {
        errorEmail.style.display = "block";
    }

    if (lenCheck(inputSubject.value, 15) === true) {
        errorSubject.style.display = "none";
    } else {
        errorSubject.style.display = "block";
    }

    if (lenCheck(inputMessage.value, 25) === true) {
        errorMessage.style.display = "none";
    } else {
        errorMessage.style.display = "block";
    }

    if (lenCheck(inputName.value, 0) && lenCheck(inputSubject.value, 10) && emailCheck(inputEmail.value) && lenCheck(inputMessage.value, 25)) {
        success.style.display = "block";
    }
}

function lenCheck(item, len) {
    if (item.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function emailCheck(emailAddress) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(emailAddress);
    return patternMatches;
}

form.addEventListener("submit", validateForm);
