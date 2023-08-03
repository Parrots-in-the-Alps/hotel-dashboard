<template>
    <div id="chart">
        <apexchart type="donut" width="380" :options="chartOptions" :series="series" ></apexchart>
  </div>
</template>

<script>
export default {
    name: 'Donut',
    data() {
        return {
          chartOptions: {
            chart: {
              width: 380,
              type: 'donut',
            },
            responsive: [{
              breakpoint: 480,
              options: {
                legend: {
                  position: 'bottom'
                }
              }
            }]
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
    },
}
</script>

<style scoped>

</style>