
const erctx = document.getElementById('categoriesChart').getContext('2d');
const categoriesChart = new Chart(erctx, {
  type: 'bar',
  data: {
    labels: ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports'],
    datasets: [{
      label: 'Quantity',
      data: [1200, 900, 750, 600, 450],
      backgroundColor: 'rgba(59, 130, 246, 0.8)', // Semi-transparent blue
      borderRadius: 8,
      barThickness: 24,
      hoverBackgroundColor: '#60a5fa',
      borderColor: 'rgba(59, 130, 246, 0.2)',
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 1000,
      easing: 'easeInOutQuart'
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#1f2937',
        bodyColor: '#1f2937',
        bodyFont: {
          family: "'Poppins', sans-serif",
          size: 13
        },
        titleFont: {
          family: "'Poppins', sans-serif",
          size: 14,
          weight: '600'
        },
        padding: {
          x: 15,
          y: 10
        },
        borderColor: '#e5e7eb',
        borderWidth: 1,
        displayColors: true,
        boxWidth: 8,
        boxHeight: 8,
        boxPadding: 4,
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            label += context.parsed.y.toLocaleString();
            return label;
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
            size: 12,
            weight: '500'
          },
          color: '#6b7280'
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(243, 244, 246, 0.6)',
          drawBorder: false
        },
        ticks: {
          font: {
            family: "'Poppins', sans-serif",
            size: 12
          },
          color: '#6b7280',
          padding: 10,
          callback: function(value) {
            return value.toLocaleString();
          }
        }
      }
    }
  }
});

// Add event listener for the category selector
document.querySelector('#productCategoriesChart select').addEventListener('change', function(e) {
  const type = e.target.value;
  let data;
  
  if (type === 'By Value') {
    data = [125000, 89000, 45000, 67000, 34000];
    categoriesChart.data.datasets[0].label = 'Value ($)';
    categoriesChart.options.scales.y.ticks.callback = function(value) {
      return '$' + value.toLocaleString();
    };
  } else {
    data = [1200, 900, 750, 600, 450];
    categoriesChart.data.datasets[0].label = 'Quantity';
    categoriesChart.options.scales.y.ticks.callback = function(value) {
      return value.toLocaleString();
    };
  }
  
  categoriesChart.data.datasets[0].data = data;
  categoriesChart.update('active');
});

