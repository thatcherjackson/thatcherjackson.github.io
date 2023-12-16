"use strict";

const $ = selector => document.querySelector(selector);
const errorMessages = document.querySelectorAll("#email_1_error", "#email_2_error","#where_error", "#party_error", "#date_error", "#date_error2");

document.addEventListener("DOMContentLoaded", () => {

    const output = $("#datetime");

    //creates variable and assigns it to a new date object
    let today = new Date();
    
    //finds the month, year, and date of the date object and assigns them to matching variables
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = today.getDate();

    //combines the month, date, and year variables into one
    let currentDate = `${month}/${date}/${year}`;

    //finds the hours, minutes, and seconds of the date object and assigns them to matching variables
    let hours = (today.getHours());
    let minutes = (today.getMinutes());
    let seconds = (today.getSeconds());

    //combines the hours, minutes, and seconds variables into one
    let currentTime = `${hours}:${minutes}:${seconds}`;

    output.textContent = "Time & Date of The Present: " + currentTime + " - " + currentDate;
    
    $("#join_list").addEventListener("click", () => {

        // get values user entered in textboxes
        const email1 = $("#email_1");
        const email2 = $("#email_2");

        //assigns spans for error messages, to values in javascript
        const email1Error = $("#email_1_error");
        const email2Error = $("#email_2_error");

        // uses RegEx to validate email form and check it's in proper email address format
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
    
        // create an error message and set it to an empty string
        let isValid = true;

        // check user entries - add text to error message if invalid
        if (email1.value == "" || !emailPattern.test(email1.value)) {
            email1Error.textContent = "Please enter a valid email address.";
            isValid = false; 
        } 
        else {
            email1Error.textContent = "";
        }
    
        if (email2.value == "" || !emailPattern.test(email2.value)) { 
            email2Error.textContent = "Please enter a valid email address.";
            isValid = false; 
        } 
        else {
            email2Error.textContent = "";
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

    $("#find_booking").addEventListener("click", () => {
        // get values user entered in fields
        const where = $("#where_to");
        const party = $("#party");
        const dateEntry = $("#date_entry1");
        const dateEntry2 = $("#date_entry2");

        //assigns spans for error messages, to values in javascript
        const whereError = $("#where_error");
        const partyError = $("#party_error");
        const dateError = $("#date_error");
        const dateError2 = $("#date_error2");

        // uses RegEx to validate form and check user entries are in proper format
        const wherePattern = /^\w+.[^0-9]+/;
        const partyPattern = /^[0-9]+/;
    
        // create an error message and set it to an empty string
        let isValid = true;

        // check user entries - add text to error message if invalid
        if (where.value == "" || !wherePattern.test(where.value)) {
            whereError.textContent = "Please enter a valid location.";
            isValid = false; 
        } 
        else {
            whereError.textContent = "";
        }
    
        if (party.value == "" || !partyPattern.test(party.value)) { 
            partyError.textContent = "Please enter a valid number.";
            isValid = false; 
        } 
        else {
            partyError.textContent = "";
        }

        if (dateEntry.value == "") {
            dateError.textContent = "Please select a date"
        }

        else {
            dateError.textContent = ""
        }

        if (dateEntry2.value == "") {
            dateError2.textContent = "Please select a date"
        }

        else {
            dateError2.textContent = ""
        }
    
        // submit the form if error message is an empty string
        if (isValid == true) {
            $("#booking_form").submit();
        }
    });
});

