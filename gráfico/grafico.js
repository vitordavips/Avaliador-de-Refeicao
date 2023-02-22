const ctx = document.getElementById('grafico');

// Gráfico
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ótimo', 'Bom', 'Ruim'],
        datasets: [{
            label: 'Ótimo',
            data:[31, 0, 0],
            backgroundColor: 'rgb(0,128,128)',
            borderWidth: 2 
        },{
            label: 'Bom',
            data:[0, 55, 00],
            backgroundColor: 'rgb(0,0,205)',
            borderWidth: 2 
        },{
            label: 'Ruim',
            data:[0, 0, 23],
            backgroundColor: 'rgb(255,0,0)',
            borderWidth: 2 
        }]
    },
    options: {
        responsive: true,
        scales:{
           yAxes: [{
                ticks:{
                    beginAtZero: true
                }
           }]
        }
    }
});