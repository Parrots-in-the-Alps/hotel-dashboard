<template>
	<div>
	

		<apexchart  type="radialBar" :options="plotOptions" :series="series"></apexchart>
	  

	  
	</div>
	  
</template>

<script>


	export default {
		name: "RadialBar",
        props: {
        series: {
            type: Array,
            required: true,
        }
    },
		data: function() {
      return {
        chart: {
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      size: undefined,
      inverseOrder: true,
      hollow: {
        margin: 5,
        size: '48%',
        background: 'transparent',

      },
      track: {
        show: false,
      },
      startAngle: -180,
      endAngle: 180

    },
  },
  stroke: {
    lineCap: 'round'
  },
  //remplacer series par le call API 
  labels: ['Luxe', 'Standard', 'Suite'],
  legend: {
    show: true,
    floating: true,
    position: 'right',
    offsetX: 70,
    offsetY: 240
  },
      }
    },

		
		
	}
	
</script>

<style scoped>


</style>
