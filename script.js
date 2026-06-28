function saudacao(){

let hora =
new Date()
.getHours();

let texto;

if(hora<12){

texto =
"Bom dia!";

}

else if(
hora<18
){

texto =
"Boa tarde!";

}

else{

texto =
"Boa noite!";

}

document
.getElementById(
"saudacao"
)
.innerHTML =
texto;

}

window.onload =
saudacao;