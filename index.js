// function validate(){
// var username = document.getElementById("username");
// var password = document.getElementById("password");
// if ( username.value != "admin" && password.value != "12345"){
//     alert ("Username or password is incorrect");
//     return false;
// }
// }
// Below function Executes on click of login button.


function validate(){
var username = document.getElementById("username");
var password = document.getElementById("password");
if(username.value.trim() ==" " && password.value.trim() ==" "){
    alert("Username and password cannot be empty");
    return false;
}
else if ( username.value == "admin" && password.value == "12345"){
alert ("Login successfully");
window.location = "main.html"; // Redirecting to other page.
return true;
}
else{
alert("Username or password is incorrect");
return false;
}
}


     