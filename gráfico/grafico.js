const ctx = document.getElementById('grafico')

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Dejejum', 'Almoço/Janta', 'Lanche'],
        datasets: [{
            label: 'Ótimo',
            data:[124, 105, 120],
            backgroundColor: 'rgb(0,128,128)',
            borderWidth: 1 
        },{
            label: 'Bom',
            data:[124, 210, 140],
            backgroundColor: 'rgb(0,0,205)',
            borderWidth: 1 
        },{
            label: 'Ruim',
            data:[44, 70, 50],
            backgroundColor: 'rgb(255,0,0)',
            borderWidth: 1 
        }]
    },
    options: {
        scales:{
            y: {
                beginAtZero: true
            }
        }
    }
});