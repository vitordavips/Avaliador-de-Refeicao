const ctx = document.getElementById('grafico')

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Ótimo', 'Bom', 'Ruim'],
        datasets: [{
            label: '# pf Votes',
            data:[12, 19, 3, 5, 2, 3],
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