'use strict';

let user = 'halla';
let pass = 123

const username = document.querySelector('username');
const password = Number(document.querySelector('password').value);

function loginredirect() {
    if (user == username && pass == password) {
        window.location.href('User.html');
    }

    else {
        displayMessage('Try again');
    }

}

// Sidebar

