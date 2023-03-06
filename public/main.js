//const socket = io();

const otimo = document.getElementById("otimo");
const bom = document.getElementById("bom");
const regular = document.getElementById("regular");

let otimoCliques = localStorage.getItem('otimoCliques') || 0;
let bomCliques = localStorage.getItem('bomCliques') || 0;
let regularCliques = localStorage.getItem('regularCliques') || 0;

/* Esse código verifica se já existe um valor armazenado para 'numCliques' na 'localStorage'.
Se não houver, ele define o valor inicial como '0'.Em seguida, ele adiciona um evento de clique ao botão
que atualizar o valor de 'numCliques' e o armazena na 'localStorage'*/
otimo.addEventListener('click', () => {
    otimoCliques++;
    localStorage.setItem('otimoCliques', otimoCliques);
});

bom.addEventListener('click', () => {
    bomCliques++;
    localStorage.setItem('bomCliques', bomCliques);
});

regular.addEventListener('click', () => {
    regularCliques++;
    localStorage.setItem('regularCliques', regularCliques);
});






/*const urlSearch = new URLSearchParams(window.location.search);
const click = urlSearch.get("click")

console.log(click)*/