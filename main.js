const socket = io();
const otimo = document.getElementById("otimo");
const bom = document.getElementById("bom");
const regular = document.getElementById("regular");

dejejum.addEventListener('click', function(){
    const message = {
        buttonClicked: true
    };
    socket.send(JSON.stringify(message));
})

socket.addEventListener('message', function(event){
    const message = JSON.parse(event.data);
    if(message.buttonClicked){
        updateChart();
    }
})

function updateChart(){
    const newValue = Math.floor(Math.random() * 50);
    chart.data.labels.push('New Label');
    chart.data.datasets[0].data.push(newValue);
    chart.uptade();
}