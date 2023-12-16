"use strict";

const $ = selector => document.querySelector(selector);
const errorMessages = document.querySelectorAll("#email_error");

document.addEventListener("DOMContentLoaded", () => {
    
    $("#submit").addEventListener("click", () => {

        // get values user entered in textboxes
        const email = $("#Email");

        //assigns spans for error messages, to values in javascript
        const emailError = $("#email_error");

        // uses RegEx to validate email form and check it's in proper email address format
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
    
        // create an error message and set it to an empty string
        let isValid = true;

        // check user entries - add text to error message if invalid
        if (email.value == "" || !emailPattern.test(email.value)) {
            emailError.textContent = "Please enter a valid email address.";
            isValid = false; 
        } 
        else {
            emailError.textContent = "";
        }
    
        // submit the form if error message is an empty string
        if (isValid == true) {
            $("#contact_form").submit();
        }
    });
});

