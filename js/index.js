//get element html;
var repass = document.getElementById("repass");
var conpassErr = document.getElementById("conpassErr");



//create a fuction for submit button;
function submitt()
{
    //pass err
if(repass.value ==""){
    repass.style.borderColor = "#d22222";
    repass.focus()
    conpassErr.innerHTML ="Enter your confirm password";
return false;
}
if(repass.value !=passw.value){
    repass.style.borderColor = "#d22222";
    repass.focus()
    conpassErr.innerHTML ="Paaswords did not match";
return false;
}
}


//user name err remove

function errRemove(){
    if(repass.value !=""){
        repass.style.borderColor ="#a39797";
        conpassErr.innerHTML ="";

    }

}
//
repass.addEventListener('blur',errRemove);
