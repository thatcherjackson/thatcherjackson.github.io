"use strict";

const $ = selector => document.querySelector(selector);
const errorMessages = document.querySelectorAll("#email_1_error", "#email_2_error");

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        // get values user entered in textboxes
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const email1Error = $("#email_1_error");
        const email2Error = $("#email_2_error");
    
        // create an error message and set it to an empty string
        let isValid = true;

        // check user entries - add text to error message if invalid
        if (email1.value == "") {
            email1Error.textContent = "This field is required.";
            isValid = false; 
        } 
        else {
            email1Error.TextContent = "";
        }
    
        if (email2.value == "") { 
            email2Error.textContent = "This field is required.";
            isValid = false; 
        } 
        else {
            email2Error.TextContent = "";
        }
    
        if (email1.value != email2.value) { 
            email2Error.textContent = "Email addresses must match"
            isValid = false; 
        }
    
        // submit the form if error message is an empty string
        if (isValid == true) {
            $("#email_form").submit();
        }
    });

    // clears all form entries and resets error messages

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#email_1_error").value = "";
        $("#email_2_error").value = "";
    });
});

