<template>
  <div id="chart">
    <apexchart type="line" :height="height" :width="width" :options="chartOptions" :series="series"></apexchart> <!-- todo ajouter l'echelle ? en jours pour les series -->
  </div>
</template>

<script>
export default {
  name: 'Line',
  data() {
    return {
      chartOptions: {
        responsive: [{
          breakpoint: undefined,
          options: {},
        }],
        colors: this.colors,
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
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'], //todo à passer en props
        }
      },
    }
  },
  props: {
    series: {
      type: Array,
      required: true,
    },
    height: {
      type: String,
      required: false,
    },
    width: {
      type: String,
      required: false,
    },
    colors: {
      type: String,
      required: false,
    },
  }
}
</script>

<style scoped></style>