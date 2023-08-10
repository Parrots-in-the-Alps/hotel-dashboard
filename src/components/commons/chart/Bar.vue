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
        },
        colors: this.colors,
      }
    }
  },

  props: {
    series: {
      type: Array,
      required: true,
    },
    colors: {
      type: Array,
      required: false,
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