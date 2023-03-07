const ctx = document.getElementById('grafico');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ótimo', 'Bom', "Ruim"],
        datasets: [{
            label: 'Votos',
            data: [0, 0, 0],
            backgroundColor: ['rgb(0, 128, 128)', 'rgb(0, 0, 205)', 'rgb(255, 0, 0)'],
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales:[{
            yAxes: [{
                beginAtZero: true
            }]
        }]
    }
});

function atualizaGrafico(index){
    const chart = chart.getChart(ctx);
    const data = chart.data.datasets[0].data;
    data[index]++;
    chart.update();
}

socket.onmessage = (event) => {
    const data = event.data;
    switch (data){
        case "otimo":
            atualizaGrafico(0);
            break;
        case "bom":
            atualizaGrafico(1);
            break;
        case "regular":
            atualizaGrafico(2);
            break;
        default:
            console.log(`Mensagem inválida: ${data}`);
    }
}