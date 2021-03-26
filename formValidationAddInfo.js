function validateFormTwo() {
var confirm = document.form1.confirm;

document.getElementById("errMsg").style.display="none";
document.getElementById("errMsg").innerHTML = "";

if(!checkboxValidation(confirm)) {
document.getElementById("errMsg").style.display="";
document.getElementById("errMsg").innerHTML = "You must confirm the details";
document.getElementById("confirm").focus();
return false;
}


return true;
}

function radioSelectValidation(selectedVal) {
if(selectedVal != null) {
return true;
}
return false;
}

function checkboxValidation(chkbox)
{
var confirmChd = chkbox.checked;
if (confirmChd == false)
{
return false;
}
return true;
}