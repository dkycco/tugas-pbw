const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Tidak/Belum Sekolah', 'Belum Tamat SD/MI', 'Tamat SD/MI', 'SMP/MTs', 'SMA/SMK', 'D1 & D2', 'D3', 'S1', 'S2', 'S3'],
        datasets: [{
            label: '# of Votes',
            data: [24.3, 10.65, 22.27, 14.45, 21.51, 0.38, 1.29, 4.78, 0.34, 0.02],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            }
        },
    }
});