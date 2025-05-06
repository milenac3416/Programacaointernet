let umporc = document.querySelector("#umporc");
let doisporc = document.querySelector("#doisporc");
let cincoporc = document.querySelector("#cincoporc");
let dezporc = document.querySelector("#dezporc");
botao = document.querySelector("#botao");

let re1 = document.querySelector("#re1");
let re2 = document.querySelector("#re2");
let re5 = document.querySelector("#re5");
let re10 = document.querySelector("#re10");

function Calcular (){
    let um = Number(umporc.value);
    let dois = Number(doisporc.value);
    let cinco = Number(cincoporc.value);
    let dez = Number(dezporc.value);

    re1.textContent = (5,75 * um /100);



    

}
botao.onclick = function (){
    Calcular
}