//get element html;
var userName = document.getElementById("userName");
var nameErr = document.getElementById("nameErr");


//create a fuction for submit button;
function submitt()
{
    //user name err
if(userName.value ==""){
userName.style.borderColor = "#d22222";
userName.focus()
nameErr.innerHTML ="Enter your name";
return false;
}


//pass name err

}


//user name err remove

function errRemove(){
    if(userName.value !=""){
        userName.style.borderColor ="#a39797";
        nameErr.innerHTML ="";

    }

}
//
userName.addEventListener('blur',errRemove);



