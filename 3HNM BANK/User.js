'use strict';


function loginredirect() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;


    if (username === "Halla" && password === "123") {
        window.location.assign('Dashboard.html');
    }
    if (username === "Hagar" && password === "123") {
        window.location.assign('hagar.html');
    }
    if (username === "Menna" && password === "123") {
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

