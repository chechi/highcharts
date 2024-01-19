(async () => {
    const data = await fetch(
        'https://www.highcharts.com/samples/data/new-intraday.json'
    ).then(response => response.json());

    Highcharts.setOptions({
        lang: {
            rangeSelectorZoom: ''
        }
    });

    Highcharts.stockChart('container', {
        chart: {
            plotBorderWidth: 1,
            plotBorderColor: '#000000',
            marginRight: 30
        },
        title: {
            text: ''
        },
        rangeSelector: {
            buttons: [{
                text: 'M1',
                title: 'Set timeframe to 1 minute',
                dataGrouping: {
                    forced: true,
                    units: [
                        ['minute', [1]]
                    ]
                }
            }, {
                text: 'M5',
                title: 'Set timeframe to 5 minutes',
                dataGrouping: {
                    forced: true,
                    units: [
                        ['minute', [5]]
                    ]
                }
            }, {
                text: 'M15',
                title: 'Set timeframe to 15 minutes',
                dataGrouping: {
                    forced: true,
                    units: [
                        ['minute', [15]]
                    ]
                }
            }, {
                text: 'M30',
                title: 'Set timeframe to 30 minutes',
                dataGrouping: {
                    forced: true,
                    units: [
                        ['minute', [30]]
                    ]
                }
            }, {
                text: 'H1',
                title: 'Set timeframe to 1 hour',
                dataGrouping: {
                    forced: true,
                    units: [
                        ['hour', [1]]
                    ]
                }
            }, {
                text: 'H4',
                title: 'Set timeframe to 4 hours',
                dataGrouping: {
                    forced: true,
                    units: [
                        ['hour', [4]]
                    ]
                }
            }, {
                text: 'D1',
                title: 'Set timeframe to 1 day',
                dataGrouping: {
                    forced: true,
                    units: [
                        ['day', [1]]
                    ]
                }
            }, {
                text: 'W1',
                title: 'Set timeframe to 1 week',
                dataGrouping: {
                    forced: true,
                    units: [
                        ['week', [1]]
                    ]
                }
            }, {
                text: 'MN',
                title: 'Set timeframe to 1 month',
                dataGrouping: {
                    forced: true,
                    units: [
                        ['month', [1]]
                    ]
                }
            }],
            selected: 4,
            inputEnabled: false
        },

        series: [{
            name: 'AAPL',
            type: 'candlestick',
            data: data,
            color: '#000000',
            tooltip: {
                valueDecimals: 2
            },
            lastPrice: {
                enabled: true,
                color: '#c0c0c0',
                label: {
                    enabled: true,
                    backgroundColor: '#000000',
                    padding: 2,
                    shape: 'rect',
                    borderRadius: 0
                }
            }
        }],

        tooltip: {
            positioner: function () {
                return {
                    x: 10,
                    y: 0
                };
            },
            shadow: false,
            borderWidth: 0,
            backgroundColor: 'transparent',
            format: '{series.name} {point.open:.2f} {point.high:.2f} {point.low:.2f} {point.close:.2f}'
        },

        xAxis: {
            gridLineWidth: 1,
            gridLineColor: '#c0c0c0',
            gridLineDashStyle: 'Dash',
            crosshair: {
                snap: false,
                label: {
                    enabled: true,
                    format: '{value:%d %b %k:%M}',
                    backgroundColor: '#000000',
                    padding: 2,
                    shape: 'rect',
                    borderRadius: 0
                }
            },
            startOnTick: true,
            tickLength: 5,
            labels: {
                distance: 4,
                formatter() {
                    const isAboveD1 =
                        this.chart.series[0].currentDataGrouping.unitRange >=
                        86400000;

                    if (this.isFirst || isAboveD1) {
                        return this.chart.time.dateFormat('%d %b %Y', this.value);
                    }
                    return this.chart.time.dateFormat('%d %b %k:%M', this.value);
                }
            }
        },
        yAxis: {
            gridLineWidth: 1,
            gridLineColor: '#c0c0c0',
            gridLineDashStyle: 'Dash',
            tickInterval: 5,
            crosshair: {
                snap: false,
                label: {
                    enabled: true,
                    format: '{value:.2f}',
                    backgroundColor: '#000000',
                    padding: 2,
                    shape: 'rect',
                    borderRadius: 0
                }
            },
            left: 35
        }
    });
})();
