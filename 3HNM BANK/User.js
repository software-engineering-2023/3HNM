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

