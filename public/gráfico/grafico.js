const numCliques = localStorage.getItem('numCliques') || 0;
const bomCliques = localStorage.getItem('bomCliques') || 0;
const regularCliques = localStorage.getItem('regularCliques') || 0;

const ctx = document.getElementById('grafico');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ótimo', 'Bom', 'Ruim'],
        datasets: [{
            label: 'Ótimo',
            data:[numCliques],
            backgroundColor: 'rgb(0,128,128)',
            borderWidth: 2 
        },{
            label: 'Bom',
            data:[0, bomCliques, 0],
            backgroundColor: 'rgb(0,0,205)',
            borderWidth: 2 
        },{
            label: 'Ruim',
            data:[0, 0, regularCliques],
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