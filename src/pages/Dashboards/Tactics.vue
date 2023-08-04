<template>
  <a-row>
    <a-col :span="20"></a-col>
    <a-col :span="4">
      <a-range-picker @change="show" v-model:value="value1" class="card" format="MM-DD-YYYY" />
    </a-col>
  </a-row>
  <a-row>
    <a-col :span="24">
      <Card title="Réservations" class="card">
        <a-row class="centered-row">
          <a-col :span="8">

            <RadialBar :labels="['remplissage actuel']" :series="[71]"></RadialBar>
          </a-col>
          <a-col :span="16">

            <div class="element">Temps d'acceuil moyen : 3 Min</div>
            <div class="element">Temps entre réservation et check-in: 3 Jours</div>
          </a-col>
        </a-row>
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
      <Card title="Utilisation des chambres" class="card">
        <a-row class="centered-row">
          <a-col class="centered-content">
            Panier Moyen : <br>
            <br>
            245€
          </a-col>
        </a-row>
      </Card>
    </a-col>

    <a-col :span="7">
      <Card title="Utilisation des chambres" class="card">
        <a-row class="centered-row">
          <a-col class="centered-content">
            Chiffre d'affaire : <br>
            <br>
            30457€
          </a-col>
        </a-row>
      </Card>
    </a-col>

    <a-col :span="7">
      <Card title="Utilisation des chambres" class="card">
        <a-row class="centered-row">
          <a-col class="centered-content">
            Nombre de réservations : <br>
            <br>
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

            <Area :labels="['8/3/2023', '8/4/2023', '8/5/2023', '8/6/2023', '8/7/2023']"
              :series="[{ data: [44, 55, 41, 17, 15] }]"></Area>
          </a-col>

        </a-row>
      </Card>
    </a-col>
  </a-row>
</template>
    
<script>
import { Card } from 'ant-design-vue';


export default {
  name: "Tactics",
  components: { Card },
  data(){
    return{
      value1: null
    }
  },
  methods: {
    show() {
      console.log(JSON.stringify(this.value1, null, 2));
    }
  }
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
  margin: 125px;
  font-size: 24px;
  /* Ajustez la valeur de la marge selon vos préférences */
}

.card {
  margin-bottom: 50px;
}
</style>