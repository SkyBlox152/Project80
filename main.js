var inputs = [];

function getParagraph1(){
for(var i=1; 1<=6; i++){
inputs.push(document.getElementById("ip"+i).value);
document.getElementById("finalpara").innerHTML = inputs.join(".")
}
}

function getParagraph2(){
for(var i=1; 1<=6; i++){
inputs.push(document.getElementById("id"+i).value);
document.getElementById("finalpara2").innerHTML = inputs.join(".")
}
}
