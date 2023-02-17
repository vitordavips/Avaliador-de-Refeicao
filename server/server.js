const express = require('express');
const app = express();

app.listen(5500, ()=>{
    console.log('server ok!')
})

// servidor webSocket
const webSocket = require('ws');

const server = new webSocket, Server({port:8080});

server.on('connection', (socket) => {
    console.log('Cliente conectado');

    socket.on('message', (message) => {
        console.log(`Mensagem recebida: ${message}`);

        //Envia uma mensagem de volta para o cliente
        socket.send(`você disse: ${message}`);
    });

    socket.on('close', () => {
        console.log('Cliente desconectado');
    })
});

server.listen(8080, () => {
    console.log('servidor es iniciado na port 8080')
})