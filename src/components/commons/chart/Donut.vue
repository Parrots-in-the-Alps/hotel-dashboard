<template>
  <div id="chart">
    <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: 'Donut',
  data() {
    return {
      chartOptions: {
        labels: this.labels,
        //si on indique pas ici qu'il doit utiliser les labels qu'on lui passe en paramètre de composant, comme il ne sont pas indiqués dans le apexchart du template (ce qui est le cas dans la doc) alors il n'affichera pas les labels
        
        plotOptions: {
          pie: {
            donut: {
              labels: { //text au centre du donut
                show: true,
                total: {
                  showAlways: true, //toujours afficher
                  show: true //afficher ou non
                }
              }
            }
          }
        },
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
    },
    
  },
}
</script>

<style scoped></style>