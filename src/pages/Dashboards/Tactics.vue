<template>
  <button type="button" class="gap-20"  @click="onClick">Download to PDF</button>
  <a-row>
    <a-col :span="20"></a-col>
    <a-col :span="4">
      <a-range-picker  v-model:value="value1" class="card" @change="onChange"/>
    </a-col>
  </a-row>
<div id="tactic_dashboard">
  <div v-if="isLoading"> <Loading></Loading></div>
  <div v-else>
  <a-row :gutter="[16,16]">
      
      <a-col :span="12">
        <a-card title="reservation" size="small" style="box-shadow: 2px 2px 3px black; border-color: black;" bodyStyle="background-color: #607D8B; height: 100%" headStyle="background-color: #243236; color: #A7A9BE" class="card">
          <a-row class="centered-row">
            <a-col  :span="12">
              <RadialBar  :labels="['occupation']"  :series="[occupation]"></RadialBar>
            </a-col>
            <a-col :span="12">
              <div class="element">Temps d'acceuil moyen : 3 Min</div>
              <div class="element">Temps entre réservation et check-in: 3 Jours</div>
            </a-col>
          </a-row>
        </a-card>
      </a-col>

      <a-col :span="12">
        <a-card title="temps moyen d'une réservation par type de chambre" size="small" style="box-shadow: 2px 2px 3px black; border-color: black;" bodyStyle="background-color: #607D8B;" headStyle="background-color: #243236; color: #A7A9BE" class="card">
          <Bar :labels="['standard', 'luxe', 'suite']" :series="[{ name: 'temps en jour' ,  data: [averageDurations.standard ? averageDurations.standard : null , averageDurations.luxury ? averageDurations.luxury : null, averageDurations.suite ? averageDurations.suite : null ] }]"></Bar>
        </a-card>
      </a-col>

  </a-row>

  


  <a-row>
    <a-col :span="24">
      <Card title="Services" class="card">
        <a-row class="centered-row">
          <a-col :span="8">
            <Donut :labels="['Petit déjeuner', 'Spectacle de lave', 'Télévision', 'Wifi', 'Repas']"
              :series="[44, 55, 41, 17, 15]"></Donut>
          </a-col>
        </a-row>
      </Card>
    </a-col>
  </a-row>

  <a-row>
    <a-col :span="24">
      <Card title="Utilisation des chambres" class="card">
        <a-row class="centered-row">
          <a-col :span="8">
            <RadialBar :labels="['chambre standard']" :series="[standardPercent]"></RadialBar>
          </a-col>
          <a-col :span="8">
            <RadialBar :labels="['chambre de luxe']" :series="[luxuryPercent]"></RadialBar>
          </a-col>
          <a-col :span="8">
            <RadialBar :labels="['suite']" :series="[suitePercent]"></RadialBar>
          </a-col>
        </a-row>
      </Card>
    </a-col>
  </a-row>

  <a-row class="centered-div">
    <a-col :span="7">
      <Card title="Panier Moyen" class="card">
        <a-row class="centered-row">
          <a-col class="centered-content">
            {{ averageCartPrice }} €
          </a-col>
        </a-row>
      </Card>
    </a-col>

    <a-col :span="7">
      <Card title="Chiffre d'affaire" class="card">
        <a-row class="centered-row">
          <a-col class="centered-content">
            {{totalCartPrice}} €
          </a-col>
        </a-row>
      </Card>
    </a-col>

    <a-col :span="7">
      <Card title="Nombre de réservations" class="card">
        <a-row class="centered-row">
          <a-col class="centered-content">
            {{ this.$dataStore.data ? this.$dataStore.data.length : "..." }}
          </a-col>
        </a-row>
      </Card>
    </a-col>
  </a-row>

  <a-row>
    <a-col :span="24">
      <Card title="Evolution du panier moyen" class="card">
        <a-row>
          <a-col :span="10">
            <Area :height="'100%'" :width="'230%'"
              :labels="['8/3/2023', '8/4/2023', '8/5/2023', '8/6/2023', '8/7/2023']"
              :series="[{ data: [44, 55, 41, 17, 15] }]"></Area>
          </a-col>
        </a-row>
      </Card>
    </a-col>
  </a-row>
</div>


 
</div>
</template>
    
<script>
import { Card } from 'ant-design-vue';
import html2pdf from "html2pdf.js";
import apiRequester from "../../utils/apiRequester.js"
import { dashboard2pdf } from "../../utils/vulcan_functions.js";
import { moneyStats, translateDate, calculateOccupancyStats, calculateAverageDurationByRoomType } from "../../utils/tactics_functions";
import moment from "moment";

export default {
  name: "Tactics",
  components: { Card },
  data() {
    return {
      value1: null,
      standardRoomsOccupancy: 0,
      luxuryRoomsOccupancy: 0,
      suiteRoomOccupancy: 0,
      standardPercent: 0,
      luxuryPercent: 0,
      suitePercent: 0,
      occupation: 0,
      isLoading: false,
      averageCartPrice: 0,
      totalCartPrice: 0,
      averageDurations: 0,
      entryDate: moment().format('YYYY-MM-DD'), 
      exitDate: moment().add(1, 'days').format('YYYY-MM-DD'),
    };

    },
    mounted() {
    this.fetchReservationsData();
  },
  
  methods: {

    onChange(date, dateString) {
        
        
        this.entryDate = translateDate(this.value1[0]);
        this.exitDate = translateDate(this.value1[1]);
        this.fetchReservationsData();
        },
       async fetchReservationsData() {
        this.isLoading = true;
      
          const headers = {
        'Content-Type': 'application/json',
      };
          const data = {
        entryDate: this.entryDate,
        exitDate: this.exitDate,
      };
      if (this.exitDate !== null && this.entryDate !== null) {
                try {
                    await this.$dataStore.getReservationsOnDates(this.entryDate, this.exitDate)
                    .then(response => {
                    this.calculateOccupancyStats();
                    this.calculateAverageDurationByRoomType();   
                    this.moneyStats(); 
        }).finally(() => {
              this.isLoading = false; 
            });
                } catch (error) {
                    console.error(error);
                    this.isLoading = false;
                }
            }
    },
        onClick() {
             const dashboard = "tactic_dashboard";
        dashboard2pdf(document.getElementById(dashboard), dashboard);
        },

        calculateOccupancyStats() {
      const {
        standardPercent,
        luxuryPercent,
        suitePercent,
        occupation,
      } = calculateOccupancyStats(this.$dataStore.data);

      this.standardPercent = standardPercent;
      this.luxuryPercent = luxuryPercent;
      this.suitePercent = suitePercent;
      this.occupation = occupation;
    },
    calculateAverageDurationByRoomType(){
      
      const averageDurations = calculateAverageDurationByRoomType(this.$dataStore.data);
      this.averageDurations = averageDurations;

    },
    moneyStats() {
      const {
        averageCartPrice,
        totalCartPrice
      } =  moneyStats(this.$dataStore.data);
      this.averageCartPrice = averageCartPrice;
      this.totalCartPrice = totalCartPrice;
    },
    },
  }

</script>
    
<style scoped>
.centered-row {
  display: flex;
  justify-content: center;
  align-items: center;
}



.centered-div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.centered-content {
  text-align: center;
}

.element {
  margin: 30px;
  font-size: 20px;
  /* Ajustez la valeur de la marge selon vos préférences */
}

.card {
  margin-bottom: 50px;

}



</style>