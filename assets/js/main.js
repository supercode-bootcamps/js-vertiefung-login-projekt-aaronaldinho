const USERS = [{
    name: "supercode",
    secret: "no_one_will_know",
    color: 'red'
}, {
    name: "music_fan_1990",
    secret: "WeAreTheChampi0ns",
    color: 'green'
}, {
    name: "admin",
    secret: "1234",
    color: 'yellow'

}, ];

fetch('https://supercode-auth-demo.herokuapp.com/')
    .then(response => response.json()) // 2
    .then(console.log) // 3
    .catch(console.log('Algo salió mal.'));

const inputAdmin = document.getElementById('exampleInputAdmin');
const inputPassword = document.getElementById('exampleInputPassword1')

const cookieValue = document.hiddenForm + ';';
console.log(cookieValue)
    // const inputColor = document.getElementById('exampleInputColor')

let hiddenForm = document.getElementById("hidden");

const buttonSubmit = document.getElementById('btn-primary');
buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    let foundUser = USERS.find(item => item.name === inputAdmin.value &&
        item.secret === inputPassword.value);

    if (foundUser) {
        hiddenForm.style.visibility = 'hidden';
    } else {
        hiddenForm.style.color = 'red';

    }
    if (!foundUser) {
        alert('incorrect')
    }

    if (foundUser == null || foundUser == "" && foundUser !== foundUser) {
        alert("Please enter the username.");
    }
    if (foundUser == null || foundUser == "") {
        alert("Please enter the password.");
    }
    // if (foundUser == null || foundUser == "") {
    //     alert("Please enter the favorite color.");
    // }
});



// USERS.find((item) => {

//     if (item.name === inputAdmin.value) {
//         console.log('User : ' + item.name)
//     } else {
//         console.log('not user')
//     }

//     if (item.secret === inputPassword.value) {
//         console.log('contrasena : ' + item.secret)
//     }
// })



// const filtered = USERS.filter(item => {
//     item.name === inputAdmin
//     if (filtered.length > 0) {
//         console.log('User : ' + filtered[0].name)
//     }
// });

///--- cookies ---///

document.getElementById('verTodas').addEventListener('click', seeAll);

///---createCookie---///
document.getElementById('crearCookie1').addEventListener('click', createCookie);
document.getElementById('crearCookie2').addEventListener('click', createCookie);

///---LOG-OUT---///
document.getElementById('logout').addEventListener('click', deleteCookie);
document.getElementById('logout').addEventListener('click', deleteCookie);


function seeAll() {
    alert(document.cookie);
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function createCookie(e) {
    e.preventDefault()
    setCookie('user', inputAdmin.value)
    console.log('createCookie', inputAdmin.value)

}

function deleteCookie(e) {

    document.cookie = 'user = ;expires=Thu,01 Jan 1970 00:00:00 UTC;';

    console.log('deleteCookie');
}

// function saveTheCookie(value) {
//     var today = new Date(); // Actual date
//     var expire = new Date(); // Expiration of the cookie

//     var cookie_name = "username_form"; // Name for the cookie to be recognized
//     var number_of_days = 10; // Number of days for the cookie to be valid (10 in this case)

//     expire.setTime(today.getTime() + 60 * 60 * 1000 * 24 * number_of_days); // Current time + (60 sec * 60 min * 1000 milisecs * 24 hours * number_of_days)

//     document.cookie = cookie_name + "=" + escape(value) + "; expires=" + expire.toGMTString();