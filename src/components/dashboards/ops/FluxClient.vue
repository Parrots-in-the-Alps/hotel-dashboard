<template>
    <div class="container">
        <div class="separator">
            <h1>toto</h1>
        </div>
        <div class="content">
            <div class="leftCol">
                <Card title="Check-in / heure">
                    <Area
                        :labels="['8/3/2023, 11:54:20 AM', '8/4/2023, 11:54:20 AM', '8/5/2023, 11:54:20 AM', '8/6/2023, 11:54:20 AM', '8/7/2023, 11:54:20 AM']"
                        :series="[{ data: [44, 55, 41, 17, 15] }]" />
                </Card>
            </div>
            <div class="rightCol">
                <Card title="donut">
                    <Donut :labels="['Apple', 'Mango', 'Banana', 'Papaya', 'Orange']" :series="[44, 55, 41, 17, 15]" />
                </Card>
                <Card title="donut">
                    <div class="text">
                        toto/20
                    </div>
                </Card>
                <Card title="donut">
                    <div class="text">
                        toto/20
                    </div>
                </Card>
            </div>
        </div>
        <div>
            <Card title="donut">
                <LineColumn
                    :series="[{ name: 'Website Blog', type: 'column', data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160] }, { name: 'Social Media', type: 'line', data: [45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45] }]"
                    :labels="['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001']" />
            </Card>

        </div>
    </div>
</template>
    
<script>
import Card from '../../commons/Card.vue'
import Area from '../../commons/chart/Area.vue'
import Donut from '../../commons/chart/Donut.vue'
import LineColumn from '../../commons/chart/LineColumn.vue'
export default {
    name: "FluxClient"
}
</script>
    
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');

.container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 3rem;
    padding-top: 1rem;
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
    font-size: 7.5rem;
    text-align: center;
}
</style>