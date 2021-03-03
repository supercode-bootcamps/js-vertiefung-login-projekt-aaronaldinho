const USERS = [{
    name: "supercode",
    secret: "no_one_will_know"
}, {
    name: "music_fan_1990",
    secret: "WeAreTheChampi0ns"
}, {
    name: "admin",
    secret: "1234"
}, ];
const inputAdmin = document.getElementById('exampleInputAdmin');
const inputPassword = document.getElementById('exampleInputPassword1')

let hiddenForm = document.getElementById("hidden");

const buttonSubmit = document.querySelector('.btn-primary');
buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    let foundUser = USERS.find(item => item.name === inputAdmin.value && item.secret === inputPassword.value);


    if (inputAdmin.value == null || inputAdmin.value == "") {
        alert("Please enter the username.");
        return false;
    }
    if (foundUser == null || foundUser == "") {
        alert("Please enter the password.");
        return false;
    }
    if (foundUser) {
        hiddenForm.remove()
    } else {

    }

});
// USERS.find((item) => {

//     // if (item.name === inputAdmin.value) {
//     //     console.log('User : ' + item.name)
//     // } else {
//     //     console.log('not user')
//     // }

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

document.getElementById('verTodas').addEventListener('click', seeAll);
document.getElementById('crearCookie1').addEventListener('click', createCookie);
document.getElementById('crearCookie2').addEventListener('click', createCookie);
document.getElementById('borrarCookie1').addEventListener('click', deleteCookie);
document.getElementById('borrarCookie2').addEventListener('click', deleteCookie);


function seeAll() {
    alert(document.cookie);
}

function createCookie(e) {
    if (!e) e = window.event;
    if (e.target.id == 'crearCookie1')
        document.cookie = 'name = Aaron';
    else if (e.target.id == 'crearCookie2')
        document.cookie = 'lastname = Espinoza';
}

function deleteCookie(e) {
    if (!e) e = window.event;
    if (e.target.id == 'borrarCookie1')
        document.cookie = 'name = ;expires=Thu,01 Jan 1970 00:00:00 UTC;';
    else if (e.target.id == 'borrarCookie2')
        document.cookie = 'lastname = ;expires=Thu,01 Jan 1970 00:00:00 UTC;';
}

document.cookie = 'name = newCookie';