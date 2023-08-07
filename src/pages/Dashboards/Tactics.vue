<template>
  <button type="button" class="gap-20"  @click="onClick">Download to PDF</button>
  <a-row>
    <a-col :span="20"></a-col>
    <a-col :span="4">
      <a-range-picker v-model:value="value1" class="card" format="MM-DD-YYYY" />
    </a-col>
  </a-row>
<div id="tactic_dashboard">

  <a-row>

      <a-col :span="12">
        <Card title="Réservations" class="card">
          <a-row class="centered-row">
            <a-col  :span="12">
              <RadialBar :labels="['occupation']"  :series="[71]"></RadialBar>
            </a-col>
            <a-col :span="12">
              <div class="element">Temps d'acceuil moyen : 3 Min</div>
              <div class="element">Temps entre réservation et check-in: 3 Jours</div>
            </a-col>
          </a-row>
        </Card>
      </a-col>

      <a-col :span="12">
        <Card title="Temps moyen par reservation" class="card">
          <Bar :labels="['standard', 'luxe', 'suite']" :series="[{ name: 'temps en jour' ,  data: [3, 5, 2] }]"></Bar>
        </Card>
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
            <RadialBar :labels="['chambre standard']" :series="[26]"></RadialBar>
          </a-col>
          <a-col :span="8">
            <RadialBar :labels="['chambre de luxe']" :series="[50]"></RadialBar>
          </a-col>
          <a-col :span="8">
            <RadialBar :labels="['suite']" :series="[33]"></RadialBar>
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
            245€
          </a-col>
        </a-row>
      </Card>
    </a-col>

    <a-col :span="7">
      <Card title="Chiffre d'affaire" class="card">
        <a-row class="centered-row">
          <a-col class="centered-content">
            30457€
          </a-col>
        </a-row>
      </Card>
    </a-col>

    <a-col :span="7">
      <Card title="Nombre de réservations" class="card">
        <a-row class="centered-row">
          <a-col class="centered-content">
            24
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
</template>
    
<script>
import { Card } from 'ant-design-vue';
import { dashboard2pdf } from "../../utils/vulcan_functions.js";

export default {
  name: "Tactics",
  components: { Card },
  data() {
    return {
      value1: null
    }
  },
  methods: {
        onChange(date, dateString) {
            //   console.log(date, dateString);
        },
        onClick() {
        const dashboard = "tactic_dashboard";
        dashboard2pdf(document.getElementById(dashboard), dashboard);
    }
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