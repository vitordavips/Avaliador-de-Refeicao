const otimoCliques = localStorage.getItem('otimoCliques') || 0;
const bomCliques = localStorage.getItem('bomCliques') || 0;
const regularCliques = localStorage.getItem('regularCliques') || 0;

window.onbeforeunload = function() {
    localStorage.removeItem('otimoCliques');
    localStorage.removeItem('bomCliques');
    localStorage.removeItem('regularCliques');
};

const ctx = document.getElementById('grafico');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ótimo', 'Bom', 'Ruim'],
        datasets: [{
            label: 'Ótimo',
            data:[Number(otimoCliques)],
            backgroundColor: 'rgb(0,128,128)',
            borderWidth: 2 
        },{
            label: 'Bom',
            data:[0, Number(bomCliques), 0],
            backgroundColor: 'rgb(0,0,205)',
            borderWidth: 2 
        },{
            label: 'Ruim',
            data:[0, 0, Number(regularCliques)],
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