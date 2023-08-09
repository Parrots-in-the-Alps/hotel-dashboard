<template>
  <div id="chart">
    <apexchart type="line" :height="height" :width="width" :options="chartOptions" :series="series"></apexchart>
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
          categories: this.categories,
          title: {
            text: this.title_bottom,
          }
        },
        yaxis: {
          title: {
            text: this.title_left,
          },
        },
      },
    }
  },
  props: {
    series: {
      type: Array,
      required: true,
    },
    categories: {
      type: Array,
      required: false,
    },
    title_bottom: {
      type: String,
      required: false,
    },
    title_left: {
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