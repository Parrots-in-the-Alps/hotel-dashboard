<template>
    <div id="chart">
        <apexchart type="line" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
export default {
    name: 'Line',
    data() {
        return {
          chartOptions: {
            stroke: {
              curve: 'straight'
            },
            title: {
              text: this.title,
              align: 'left'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            }
          },
        }
    },
    props: {
        series: {
            type: Array,
            required: true,
        },
    }
}
</script>

<style scoped>

</style>