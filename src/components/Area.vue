<template>

        <div>
        <apexchart type="area" height="100%" width="1230px" :options="chartOptions" :series="series"></apexchart>
    </div>

</template>

<script>
export default {
    name: 'Area',
    data() {
        return {
            chartOptions: {
                stroke: {
                    curve: 'straight'
                },
                labels: this.labels, // /!\ you must use the following date format : new Date().toLocaleString() => '8/3/2023, 11:54:20 AM'
                xaxis: {
                    type: 'datetime',
                },
                yaxis: {
                    opposite: true
                },
                legend: {
                    horizontalAlign: 'left'
                }
            },
        }
    },
    props: {
        series: {
            type: Array,
            required: true,
        },
        labels: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped></style>