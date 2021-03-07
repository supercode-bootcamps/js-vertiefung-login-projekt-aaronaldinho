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
let appear = document.getElementById('hidden')
appear.style.filter = blur(0)

let hiddenForm = document.getElementById("hidden");
let appearForm = document.getElementById('appear')

const buttonSubmit = document.getElementById('btn-primary');
buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    let foundUser = USERS.find(item => item.name === inputAdmin.value &&
        item.secret === inputPassword.value);

    if (foundUser) {
        hiddenForm.style.visibility = 'hidden';
        appearForm.innerHTML = 'good'

    } else {
        let hiddenForm = document.getElementById("hidden");
        let newElement = document.createElement('p');
        document.innerHTML.appendChild(newElement);
        newElement.style.color = 'red';

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

    var contenido = document.querySelector('#contenido')
    buttonSubmit.addEventListener('click', buttonSubmit)
    contenido.innerHTML = ` User:<h5>${foundUser.name}</h5>`;
    console.log(buttonSubmit)
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

// document.getElementById('verTodas').addEventListener('click', seeAll);

///---createCookie---///
document.getElementById('btn-primary').addEventListener('click', createCookie);


function seeAll() {
    alert(document.cookie);
}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000) + 3);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function createCookie(e) {
    e.preventDefault()
    setCookie('user', inputAdmin.value)
    console.log('', inputAdmin.value)

}
//---LOG-OUT---///
document.getElementById('logout').addEventListener('click', deleteCookie);

function deleteCookie() {
    document.cookie = 'user = ;expires=Thu,01 Jan 1970 00:00:00 UTC;';
}

///---api-doggos////////////////////////////////