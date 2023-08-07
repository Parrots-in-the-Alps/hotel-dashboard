<template>
    <div id="chart">
      <apexchart type="bar" :width="width" :height="height" :options="chartOptions" :series="series"></apexchart>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Bar',
    data() {
        return {
      chartOptions: {
        chart: {
          id: 'ZOUNGOU'
        },
        xaxis: {
          categories: this.labels
        }
      }
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
        },
        width: {
            required: true,
        },
        height: {
            required: true,
        }
    }
  }
  </script>
  
  <style scoped></style>