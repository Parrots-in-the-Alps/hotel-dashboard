<template>
    <div id="chart">
        <div id="chart-timeline">
            <apexchart type="area" ref="chart" :options="chartOptions" :series="series"></apexchart>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Datetime-X-Axis',
    props: {
        series: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            chartOptions: {
                chart: {
                    id: 'area-datetime',
                    zoom: {
                        autoScaleYaxis: true
                    }
                },
                annotations: {
                    yaxis: [{
                        y: 30,
                        borderColor: '#999',
                        label: {
                            show: true,
                            text: 'Support',
                            style: {
                                color: "#fff",
                                background: '#00E396'
                            }
                        }
                    }],
                    xaxis: [{
                        x: new Date('14 Nov 2012').getTime(),
                        borderColor: '#999',
                        yAxisIndex: 0,
                        label: {
                            show: true,
                            text: 'Rally',
                            style: {
                                color: "#fff",
                                background: '#775DD0'
                            }
                        }
                    }]
                },
                markers: {
                    size: 0,
                    style: 'hollow',
                },
                xaxis: {
                    type: 'datetime',
                    min: new Date('01 Mar 2012').getTime(),
                    tickAmount: 6,
                },
                tooltip: {
                    x: {
                        format: 'dd MMM yyyy'
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.9,
                        stops: [0, 100]
                    }
                },
            },
            selection: 'one_year',
        }
    },
}
</script>

<style scoped></style>