// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "Admin" && password == "Resvera2021"){
setTimeout(function() {window.location = "/login/db.html" });
}
else{

    alert("Access denied. Valid username and password is required.");
    setTimeout(function() {window.location = "/login/index.html" });
}
}
