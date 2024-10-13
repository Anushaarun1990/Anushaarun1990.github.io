var emailfield=document.getElementById("email1");
var error=document.getElementById("email");
function validate(){
    if(!emailfield.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        error.style.visibility="visible";
        error.innerHTML="Please enter valid mail id";
        return false;
}
    error.innerHTML="";
    return true;
}