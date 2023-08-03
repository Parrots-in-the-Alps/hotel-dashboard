<template>
  <div>


    <apexchart type="radialBar" :options="plotOptions" :series="series"></apexchart>



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
    }
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
        labels: this.labels,
      },
    }
  },



}

</script>

<style scoped></style>
