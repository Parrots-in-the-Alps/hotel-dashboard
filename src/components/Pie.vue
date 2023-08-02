<template>
    <div id="chart">
        <apexchart type="pie" width="380" :options="chartOptions" :series="series" ></apexchart>
  </div>
</template>

<script>
export default {
    name: 'Pie',
    data() {
        return {
          chartOptions: {
            chart: {
              width: 380,
              type: 'pie',
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