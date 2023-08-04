<template>
    <div class="container">
        <div class="separator">
            <h1>toto</h1>
        </div>
        <div class="content">
            <div class="rightCol">
                <Card title="Repas servis/ attendus" >
                    <div>
                        <Area 
                        :labels="['8/3/2023, 11:54:20 AM', '8/4/2023, 11:54:20 AM', '8/5/2023, 11:54:20 AM', '8/6/2023, 11:54:20 AM', '8/7/2023, 11:54:20 AM']"
                        :series="[{ data: [44, 55, 41, 17, 15] }]" />
                    </div>
                </Card>
            </div>
            <div class="Repas servis/ heure">
                <Card title="donut">
                    <Donut :labels="['Apple', 'Mango', 'Banana', 'Papaya', 'Orange']" :series="[44, 55, 41, 17, 15]" />
                </Card>
            </div>
        </div>
    </div>
</template>
    
<script>
import Card from '../../commons/Card.vue'
import Area from '../../commons/chart/Area.vue'
import Donut from '../../commons/chart/Donut.vue'
import LineColumn from '../../commons/chart/LineColumn.vue'
export default {
    name: "FluxResto"
}
</script>
    
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');

.container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.content {
    display: flex;
    flex-direction: row;
    column-gap:1rem;
    
}

.separator {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: cinzel;
    padding-bottom: 0.3rem;
}

.leftCol {
    display: flex;
    flex-direction: column;
    width: 70%;
}

.rightCol {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;
}

.text {
    font-family: cinzel;
    text-align: center;
}
</style>