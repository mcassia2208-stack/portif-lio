console.long("olá Mundo, o javaScript está funcionando");

const nome= "Milena";
let hora= new Date().gethHours();
console.log(hora);

let saudacao;
if(hora<12){
    saudacao = "bom dia";
} else if(hora<18) {
    saudacao="boa tarde";
} else {
    saudacao =" boa noite";
}
console.log (saudacao);
const titulo= document.querySelector("h1");
titulo.texContent= saudacao + ",eu sou o"+ nome;