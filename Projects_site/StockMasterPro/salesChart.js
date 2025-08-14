
const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['March', 'April', 'May', 'June', 'July', 'August'],
        datasets: [{
            label: 'Monthly Sales ($)',
            data: [24573, 28456, 32789, 29654, 36782, 42156],
            backgroundColor: '#3b82f6',
            borderRadius: 6,
            barThickness: 24,
            hoverBackgroundColor: '#60a5fa'
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
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
