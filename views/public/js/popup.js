const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");
const btn = document.querySelector(".btn");
var username = document.getElementById("username");
var password = document.getElementById("password");
var passwordRepeat = document.getElementById("passwordRepeat");

var button = document.getElementById("signBtn");

button.onclick = ()=>{
//validation for Password
    let hasLetter = false, hasDigit = false;
    for (var i = 0; i < password.value.length; i++) {
        if (('a' <= password.value.charAt(i) && password.value.charAt(i) <= 'z') || ('A' <= password.value.charAt(i) && password.value.charAt(i) <= 'Z')) {
            hasLetter = true;
        }
        if ('0' <= password.value.charAt(i) && password.value.charAt(i) <= '9') {
            hasDigit = true;
        }
    }
    if (hasLetter == false || hasDigit == false) {
        alert("Your password should contain at least 1 letter and 1 digit.");
    }
    else if (username.value.length < 3) {
        alert("Your username should contain at least 3 characters.")
    }
    else if (password.value.length < 8) {
        alert("Your password should contain at least 8 symbols.")
    }
    else if (password.value != passwordRepeat.value) {
        alert("Passwords do not match.");
    }
    else {
        alert("You have been successfully registered!");
        setTimeout(()=>{
            location.href = 'mainpage.html';
        }, 250);
    }

}

window.addEventListener("load",function(){

    showPopup();
    setTimeout(function(){
        loginPopup.classList.add("show");
    },100)

})
//
function showPopup(){
//     const timeLimit = 3 // seconds;
//     let i=0;
//     const timer = setInterval(function(){
//         i++;
//         if(i == timeLimit){
//             clearInterval(timer);
//             loginPopup.classList.add("show");
//         }
//         console.log(i)
//     },1000);
}
