export function confChargeGraph([data, angleList]) {
    const labels = angleList;

    const graphData = {
        labels: labels,
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data,
        }]
    };

    return {
        type: 'line',
        data: graphData,
        options: {}
    };
};