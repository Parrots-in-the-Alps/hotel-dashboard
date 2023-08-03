<template>
	<div>
	    <a-row>
      <a-col :span="12">
		<Card title="Le pipi c'est délicieux">
		<apexchart  type="bar" :options="chartOptions" :series="series"></apexchart>
	   </Card>
      </a-col>
      <a-col :span="12">
        <Card title="Le pipi c'est délicieux en barre">
        <RadialBar :series="[71, 63, 77]"></RadialBar>
        </Card>

      </a-col>
    </a-row>
   
    <a-row>

<a-col :span="12">
  <Card title="chambre occupées"><Table type="occupied"></Table></Card></a-col>


<a-col :span="12">
  <Card title="chambre disponibles"><Table type="free"></Table></Card></a-col>
</a-row>

	  
	</div>
	  
</template>

<script>


	export default {
		name: "HomePage",
		data: function() {
      return {
        chartOptions: {
          chart: {
            id: 'ZOUNGOU'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }]
      }
    },

		
		
	}
	
</script>

<style scoped>


</style>
