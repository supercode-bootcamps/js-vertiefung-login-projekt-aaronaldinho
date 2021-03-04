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
const inputAdmin = document.getElementById('exampleInputAdmin');
const inputPassword = document.getElementById('exampleInputPassword1')
const inputColor = document.getElementById('exampleInputColor')

let hiddenForm = document.getElementById("hidden");

const buttonSubmit = document.querySelector('.btn-primary');
buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    let foundUser = USERS.find(item => item.name === inputAdmin.value &&
        item.secret === inputPassword.value && item.color === inputColor.value);

    if (foundUser) {
        hiddenForm.style.transition = 'easy-in 0.5s'
        hiddenForm.style.visibility = 'hidden';
    } else {
        let showError = document.createElement('div');
        showError.id = '#item';
        $('#hidden').append(showError);
        hiddenForm.style.cssText = 'display: flex; justify-content: center; align-items: center'
        hiddenForm.setAttribute('style', 'color:yellow;')
    }

    if (foundUser == null || foundUser == "" && foundUser !== foundUser) {
        alert("Please enter the username.");
    }
    if (foundUser == null || foundUser == "") {
        alert("Please enter the password.");
    }
    if (foundUser == null || foundUser == "") {
        alert("Please enter the favorite color.");
    }
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

// document.getElementById('verTodas').addEventListener('click', seeAll);
// document.getElementById('crearCookie1').addEventListener('click', createCookie);
// document.getElementById('crearCookie2').addEventListener('click', createCookie);
// document.getElementById('borrarCookie1').addEventListener('click', deleteCookie);
// document.getElementById('borrarCookie2').addEventListener('click', deleteCookie);


// function seeAll() {
//     alert(document.cookie);
// }

// function createCookie(e) {
//     if (!e) e = window.event;
//     if (e.target.id == 'crearCookie1')
//         document.cookie = 'name = Aaron';
//     else if (e.target.id == 'crearCookie2')
//         document.cookie = 'lastname = Espinoza';
// }

// function deleteCookie(e) {
//     if (!e) e = window.event;
//     if (e.target.id == 'borrarCookie1')
//         document.cookie = 'name = ;expires=Thu,01 Jan 1970 00:00:00 UTC;';
//     else if (e.target.id == 'borrarCookie2')
//         document.cookie = 'lastname = ;expires=Thu,01 Jan 1970 00:00:00 UTC;';
// }