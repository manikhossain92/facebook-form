//get element html;
var passw = document.getElementById("passw");
var passErr = document.getElementById("passErr");



//create a fuction for submit button;
function submitt()
{
    //pass err
if(passw.value ==""){
    passw.style.borderColor = "#d22222";
    passw.focus()
    passErr.innerHTML ="Enter your password";
return false;
}

if(passw.value.length <=7){
    passw.style.borderColor = "#d22222"
    passw.focus()
    passErr.innerHTML ="password must be 8 characters";
    return false;
}
}


//user name err remove

function errRemove(){
    if(passw.value !=""){
        passw.style.borderColor ="#a39797";
        passErr.innerHTML ="";

    }

}
//
passw.addEventListener('blur',errRemove);
