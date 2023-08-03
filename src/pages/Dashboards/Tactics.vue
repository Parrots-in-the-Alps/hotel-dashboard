<template>
   

   <a-row>
    <a-col :span="24">
      <Card title="Réservations">
        <a-row class="centered-row">
          <a-col :span="6">
 
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
      <Card title="Services">
        <a-row class="centered-row">
          <a-col :span="8">
 
            <Donut :labels="['Petit déjeuner', 'Spectacle de lave', 'Télévision', 'Wifi', 'Repas']" :series="[44, 55, 41, 17, 15]"></Donut>
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
    components: { Card }
}
    </script>
    
    <style scoped>
 .centered-row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.element {
  margin: 125px;
  font-size: 24px; /* Ajustez la valeur de la marge selon vos préférences */
}
    
    </style>