const otimo = document.getElementById("otimo");
const bom = document.getElementById("bom");
const regular = document.getElementById("regular");   

const socket =  new WebSocket("ws://localhost:8080");

socket.onpen = () =>{
    console.log("Conexão estabelecida com o servidor webSocket.")
};

socket.onerror = (error) => {
    console.log(`Erro: ${error}`);
};

otimo.onclick = () => {
    socket.send("otimo");
};

bom.onclick = () => {
    socket.send("bom");
};

regular.onclick = () => {
    socket.send("regular");
}