<template>
  <div>
    <apexchart type="radialBar" :height="height" :options="plotOptions" :series="series"></apexchart>
  </div>
</template>

<script>


export default {
  name: "RadialBar",
  props: {
    series: {
      type: Array,
      required: true,
    },
    labels: {
      type: Array,
      required: true,
    },
    colors: {
      type: Array,
      required: false,
    },
    height: {
      required: false,
    },
  },
  data: function () {
    return {
      chart: {
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          size: undefined,
          inverseOrder: true,

        },
        colors: this.colors,
        labels: this.labels,
      },
    }
  },



}

</script>

<style scoped></style>
