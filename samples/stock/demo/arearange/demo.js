(async () => {

    // Notice that the dataset has missing data
    const data = await fetch(
        'https://www.highcharts.com/samples/data/range.json'
    ).then(response => response.json());

    Highcharts.stockChart('container', {

        chart: {
            type: 'arearange'
        },

        rangeSelector: {
            selected: 2
        },

        title: {
            text: 'Temperature variation by day'
        },

        tooltip: {
            valueSuffix: '°C'
        },

        series: [{
            name: 'Temperatures',
            data: data
        }]

    });

})();
