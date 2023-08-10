<template>
    <div>
        <button type="button" class="gap-20" @click="onClick">Download to PDF</button>
    </div>
    <div v-if="isLoading">
        <Loading></Loading>
    </div>
    <div v-else class="main" id="ops_dashboard">
        <section class="section">
            <div class="title">
                FLUX CLIENT
            </div>
            <div class="upperrow">
                <div class="leftcol">
                    <a-card title="Check-in / heure" size="small"
                        style="box-shadow: 2px 2px 3px black; border-color: black;" bodyStyle="background-color: #607D8B;"
                        headStyle="background-color: #243236; color: #A7A9BE" class="card">
                        <div class="cardBody">
                            <Area :height="'330px'" :width="'1150px'"
                                :labels="['8/3/2023, 11:54:20 AM', '8/4/2023, 11:54:20 AM', '8/5/2023, 11:54:20 AM', '8/6/2023, 11:54:20 AM', '8/7/2023, 11:54:20 AM']"
                                :series="[{ data: [44, 55, 41, 17, 15] }]"></Area>

                        </div>

                    </a-card>
                </div>
                <div class="rightcol">
                    <div class="rrow1">
                        <a-card title="Check-in réalisés / attendus" size="small"
                            style="box-shadow: 2px 2px 3px black; border-color: black;"
                            bodyStyle="background-color: #607D8B;" headStyle="background-color: #243236; color: #A7A9BE"
                            class="card">
                            <div class="cardBody">
                                <Donut :height="'140px'" :width="'500px'"
                                    :labels="['Apple', 'Mango', 'Banana', 'Papaya', 'Orange']"
                                    :series="[44, 55, 41, 17, 15]" />
                            </div>



                        </a-card>
                    </div>
                    <div class="rrow2">
                        <a-card title="Cartes d'accès délivrées / stock" size="small"
                            style="box-shadow: 2px 2px 3px black; border-color: black;"
                            bodyStyle="background-color: #607D8B;" headStyle="background-color: #243236; color: #A7A9BE"
                            class="card">
                            <div class="text">
                                {{ $dataStore.opsdata.distributedCards }} / {{ $dataStore.opsdata.totalAccessCards }}

                            </div>
                        </a-card>
                    </div>
                    <div class="rrow3">
                        <a-card title="Clients présents / capacité d'accueil" size="small"
                            style="box-shadow: 2px 2px 3px black; border-color: black;"
                            bodyStyle="background-color: #607D8B;" headStyle="background-color: #243236; color: #A7A9BE"
                            class="card">
                            <div class="text">
                                {{ $dataStore.opsdata.clientInHotel }} / {{ $dataStore.opsdata.customerCapacity }}
                            </div>
                        </a-card>
                    </div>

                </div>


            </div>
            <div class="lowerrow">
                <a-card title="Temps d'accueil / temps d'accueil cible" size="small"
                    style="box-shadow: 2px 2px 3px black; border-color: black;" bodyStyle="background-color: #607D8B;"
                    headStyle="background-color: #243236; color: #A7A9BE" class="card">
                    <div class="cardBody">
                        <LineColumn :height="'330px'" :width="'1700px'"
                            :series="[{ name: 'Website Blog', type: 'column', data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160] }, { name: 'Social Media', type: 'line', data: [45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45, 45] }]"
                            :labels="['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001']" />
                    </div>
                </a-card>
            </div>


        </section>
        <!-- <section class="section2">
            <div class="title2">
                FLUX RESTAURATION
            </div>
            <div class="upperrow2">
                <div class="leftcol2">
                    <a-card :title="title" size="small" style="box-shadow: 2px 2px 3px black; border-color: black;"
                        bodyStyle="background-color: #607D8B;" headStyle="background-color: #243236; color: #A7A9BE"
                        class="card">
                        <div></div>
                    </a-card>
                </div>
                <div class="rightcol2">
                    <a-card title="Chambres disponibles" size="small" style="box-shadow: 2px 2px 3px black; border-color: black;"
                        bodyStyle="background-color: #607D8B;" headStyle="background-color: #243236; color: #A7A9BE"
                        class="card">
                        <div></div>
                    </a-card>
                </div>


            </div>


        </section> -->
        <section class="section3">
            <div class="title">
                FLUX CHAMBRES
            </div>
            <div class="upperrow3">
                <div class="leftcol3">
                    <a-card title="Chambres occupées" size="small"
                        style="box-shadow: 2px 2px 3px black; border-color: black;" bodyStyle="background-color: #607D8B;"
                        headStyle="background-color: #243236; color: #A7A9BE" class="card">
                        <div class="cardBody">
                            <Table type="occupied"></Table>
                        </div>
                    </a-card>
                </div>
                <div class="rightcol3">
                    <a-card title="Chambres disponibles" size="small"
                        style="box-shadow: 2px 2px 3px black; border-color: black;" bodyStyle="background-color: #607D8B;"
                        headStyle="background-color: #243236; color: #A7A9BE" class="card">
                        <div class="cardBody">
                            <Table type="occupied"></Table>
                        </div>
                    </a-card>

                </div>
            </div>
        </section>
    </div>
</template>
    
<script>
import { dashboard2pdf } from "../../utils/vulcan_functions.js";
import Area from '../../components/commons/chart/Area.vue'
import Donut from '../../components/commons/chart/Donut.vue'
import LineColumn from '../../components/commons/chart/LineColumn.vue'
import Table from '../../components/commons/chart/Table.vue'

export default {
    name: "Ops",
    mounted() {
    this.fetchReservationsData();
    },
    data(){
        return{
            isLoading:false,
    }
    },

    methods: {
        onClick() {
            const dashboard = "ops_dashboard";
            dashboard2pdf(document.getElementById(dashboard), dashboard);
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
          await this.$dataStore.getOpsData()
            .then(response => {
            //   this.calculateOccupancyStats();
            //   this.calculateAverageDurationByRoomType();
            //   this.moneyStats();
            //   this.timeBetweenResaCheckIn();
            //   this.timeAcceuil();
            //   this.serviceStats();
            }).finally(() => {
              this.isLoading = false;
            });
        } catch (error) {
          console.error(error);
          this.isLoading = false;
        }
      }
    },


    }
}
</script>
    
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');

.main {
    display: flex;
    flex-direction: column;

}

.section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin-bottom: 7%;
    gap: 1vw;
}

/* .section2 {
    height: 50%;
    width: 100%;
    background-color: aqua;
    display: flex;
    flex-direction: column;
    margin-top: 5%;
    margin-bottom: 7%;
    padding-left: 2%;
    padding-right: 2%;
} */

.section3 {
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin-bottom: 10%;
    gap: 1vw;
}

.title {
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: cinzel;
    font-size: xx-large;
}

/* .title2 {
    background-color: aquamarine;
    height: 20%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: cinzel;
} */

.upperrow {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 45%;
    gap: 1vw;
}

/* .upperrow2 {
    background-color: blue;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
} */

.upperrow3 {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    gap: 1vw;
}

.lowerrow {
    width: 100%;
    height: 45%;
}

.leftcol {
    width: 70%;
}

/* .leftcol2 {
    width: 30%;
    background-color: cadetblue;
} */

.leftcol3 {
    width: 50%;
}

.rightcol {
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 0.77vw;

}

/* .rightcol2 {
    width: 70%;
    background-color: brown;
    display: flex;
    flex-direction: column;

} */

.rightcol3 {
    width: 50%;
    height: 100%;

}

.rrow1 {
    height: 50%;
}

.rrow2 {
    height: 25%;
}

.rrow3 {
    height: 25%;
}

.cardBody {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.text {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-family: cinzel;
    font-size: medium;
}
</style>