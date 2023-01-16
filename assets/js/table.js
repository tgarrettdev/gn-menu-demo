var rows = document.querySelectorAll("table tr");

// Add a hover effect to the rows
rows.forEach(function(row) {
    row.addEventListener("mouseover", function() {
        this.style.backgroundColor = "#f1f1f1";
    });
    row.addEventListener("mouseout", function() {
        this.style.backgroundColor = "";
    });
});

// Get all canvas elements on the page
var canvasElements = document.querySelectorAll('canvas');

// Create a chart for each canvas element
canvasElements.forEach(function(canvasElement) {
    var ctx = canvasElement.getContext('2d');
    var chart = new Chart(ctx, {
        type: 'table',
        data: {
            labels: ['Calories', 'Fat', 'Protein', 'Carbohydrates', 'Vitamins and minerals'],
            datasets: [{
                    label: 'Value',
                    data: [250, 15, 12, 20, 25],
                    backgroundColor: '#b2e2e2'
                },
                {
                    label: 'Recommended intake',
                    data: [2000, 65, 50, 300, 100],
                    backgroundColor: '#ddbbff'
                }
            ]
        },
        options: {
            legend: {
                position: 'bottom'
            },
            // Add tooltips to the chart
            tooltips: {
                callbacks: {
                    label: function(tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var label = dataset.label || '';
                        var value = dataset.data[tooltipItem.index];
                        return label + ': ' + value + '%';
                    }
                }
            }
        }
    });
});