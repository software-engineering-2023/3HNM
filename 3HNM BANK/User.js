'use strict';

function Register() {
    var id = document.forms["registrationForm"]["nationalID"].value;
    var username = document.forms["registrationForm"]["username"].value;

    if (id === "123456789") {
        alert('National ID already exists, Login instead');
    }
    else if (username === "Halla") {
        alert('Username already exists')
    }
    else
        window.location.assign('Login.html')
}

function loginredirect() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (username === "Halla" && password === "123") {
        window.location.assign('Dashboard.html');
    }
    else if (username === "Hagar" && password === "123") {
        window.location.assign('hagar.html');
    }
    else if (username === "Menna" && password === "123") {
        window.location.assign('Admin.html');
    }

    else {
        alert("Incorrect Username or Password")
    }
}

function setReminder() {

    alert('Reminder Set');
}


function helpsubmit() {
    if (document.getElementById("description").value != "") {
        alert("Hello, We've Received your technical issue report, we'll work on it as soon as possible and get back to you")
    }
    else {
        alert("please provide us with more details to your problem, Thank you")
    }
}

function transfer() {
    let valid = true;
    $('[required]').each(function () {
        if ($(this).is(':invalid') || !$(this).val()) valid = false;
    })
    if (!valid) alert("error please fill all fields!");
    else alert('Transfer Completed Successfully');
}


function calculate() {
    let amount = document.getElementById('loanamount').value;
    let duration = document.getElementById('duration').value;

    if (document.getElementById('personal').checked) {
        let interest = amount * 0.14;
        let payment = (amount + interest) / duration;
        document.getElementById('total-loan').textContent = `Total Loan: ${amount}`;
        document.getElementById('Interest Rate').textContent = `Interest Rate: 14%`;
        document.getElementById('interest-amount').textContent = `Total Interest: ${interest}`;
        document.getElementById('pay-month').textContent = `Payment Per Month: ${payment}`;
    }

    if (document.getElementById('Car').checked) {
        let interest = amount * 0.05;
        let payment = (amount + interest) / duration;
        document.getElementById('total-loan').textContent = `Total Loan: ${amount}`;
        document.getElementById('Interest Rate').textContent = `Interest Rate: 5%`;
        document.getElementById('interest-amount').textContent = `Total Interest: ${interest}`;
        document.getElementById('pay-month').textContent = `Payment Per Month: ${payment}`;
    }
}


function respond() {
    // Get the popup element
    var popup = document.getElementById("myPopup");

    // Show the popup
    popup.style.display = "block";
}

function sendMessage() {
    var input = document.querySelector("#myPopup .text-box");
    var message = input.value;
    // Perform any necessary actions with the message (e.g., send it to a server, display it somewhere, etc.)
    console.log("Message sent:", message);
    input.value = ""; // Clear the input field
    closePopup(); // Close the popup
}

function closePopup() {
    var popup = document.getElementById("myPopup");
    popup.style.display = "none";
}
