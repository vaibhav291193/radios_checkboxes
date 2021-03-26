function validateFormOne() {
var errors=[];
var selectedShape = document.querySelector('input[name="shape"]:checked');
var selectedShip = document.querySelector('input[name="ship"]:checked');

document.getElementById("shapeError").style.display="none";
document.getElementById("shapeError").innerHTML = "";


document.getElementById("shipError").style.display="none";
document.getElementById("shipError").innerHTML = "";

if(!radioSelectValidation(selectedShape)) {
errors.push(1);
document.getElementById("shapeError").style.display="";
document.getElementById("shapeError").innerHTML = "You must select an option";
}
if(!radioSelectValidation(selectedShip)) {
errors.push(2);
document.getElementById("shipError").style.display="";
document.getElementById("shipError").innerHTML = "You must select an option";
}
if(errors.length > 0) {
if(errors[0] == 1) {
document.getElementById("cylindrical").focus();
} else {
document.getElementById("regular").focus();
}
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