const revenueCtx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(revenueCtx, {
    type: 'line',
    data: {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            label: 'Revenue ($)',
            data: [50000, 75000, 65000, 90000],
            borderColor: '#3b82f6',
            backgroundColor: 'rgba(59, 130, 246, 0.2)',
            fill: true,
            tension: 0.3,
            pointRadius: 5,
            pointHoverRadius: 7,
            borderWidth: 3,
            cubicInterpolationMode: 'monotone'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                labels: {
                    font: {
                        family: "'Poppins', sans-serif",
                        size: 14
                    },
                    color: '#374151'
                }
            },
            tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                titleColor: '#1f2937',
                bodyColor: '#1f2937',
                bodyFont: {
                    family: "'Poppins', sans-serif"
                },
                padding: 12,
                borderColor: '#e5e7eb',
                borderWidth: 1,
                displayColors: false,
                callbacks: {
                    label: function(context) {
                        return '$ ' + context.parsed.y.toLocaleString();
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        family: "'Poppins', sans-serif",
                        size: 12
                    },
                    color: '#6b7280'
                }
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: '#f3f4f6'
                },
                ticks: {
                    font: {
                        family: "'Poppins', sans-serif",
                        size: 12
                    },
                    color: '#6b7280',
                    callback: function(value) {
                        return '$ ' + value.toLocaleString();
                    }
                }
            }
        }
    }
});

// Add event listener for the period selector
document.querySelector('#revenueTrendsChart select').addEventListener('change', function(e) {
    const period = e.target.value;
    let labels, data;
    
    switch(period) {
        case 'Monthly':
            labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
            data = [15000, 25000, 20000, 30000, 28000, 35000];
            break;
        case 'Weekly':
            labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
            data = [12000, 15000, 13000, 18000];
            break;
        default: // Quarterly
            labels = ['Q1', 'Q2', 'Q3', 'Q4'];
            data = [50000, 75000, 65000, 90000];
    }
    
    revenueChart.data.labels = labels;
    revenueChart.data.datasets[0].data = data;
    revenueChart.update();
});
