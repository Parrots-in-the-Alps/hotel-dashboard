<template>
    <div id="chart">
        <apexchart type="line" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
export default {
    name: 'LineColumn',
    props: {
        series: {
            type: Array,
            required: true
        },
        labels: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            chartOptions: {
                stroke: {
                    width: [0, 4]
                },
                dataLabels: {
                    enabledOnSeries: [1]
                },
                labels: this.labels,
                xaxis: {
                    type: 'datetime'
                },
                yaxis: [{
                    title: {
                        text: 'Website Blog',
                    },

                }, {
                    opposite: true,
                    title: {
                        text: 'Social Media'
                    }
                }]
            },
        }
    },
}
</script>

<style scoped></style>