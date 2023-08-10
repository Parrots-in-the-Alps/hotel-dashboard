<template>
    <div v-if="isLoading">
        <Loading></Loading>
    </div>
    <div class="container-column" id="strategics_dashboard" v-else>

        <div class="month-picker mb-25">
            <a-month-picker class="gap-20 error" placeholder="Mois précédent" @change="onChange" />
            <p class="gap-20">Par rapport à</p>
            <a-month-picker class="gap-20 success" placeholder="Mois en cours" @change="onChange" />
            <button type="button" class="gap-20" @click="onClick">Download to PDF</button>
        </div>

        <div class="container-unique mb-25" v-if="error_message == null">
            <p>{{ error_message }}</p>
        </div>

        <div class="container-row-evenly mb-25">
            <Card class="gap-20 mb-25" title="Temps entre réservation et check-in moyen"
                v-if="reservations_by_months.averageTimeBetweenReservationAndCheckIn.precedently_month != null && reservations_by_months.averageTimeBetweenReservationAndCheckIn.currently_month != null">
                <Line :height="'230px'" :width="'450px'" :colors="['#00E396', '#F5222D']" :title_bottom="'reservations'"
                    :title_left="'jours - réservation au check-in'"
                    :series="[{ name: 'precedently month', data: reservations_by_months.averageTimeBetweenReservationAndCheckIn.precedently_month }, { name: 'currently month', data: reservations_by_months.averageTimeBetweenReservationAndCheckIn.currently_month }]">
                </Line>
            </Card>
            <Card class="gap-20 mb-25" title="Temps d'accueil moyen"
                v-if="clone_precedently_month != null && clone_currently_month != null">
                <Line :height="'230px'" :width="'450px'" :colors="['#00E396', '#F5222D']"
                    :series="[{ name: '', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }, { name: '', data: [120, 95, 90, 85, 80, 85, 90, 95, 65] }]">
                </Line>
            </Card>
            <Card class="gap-20 mb-25" title="Taux de remplissage moyen"
                v-if="reservations_by_months.roomOccupancyRateInTheFuture.precedently_month != null && reservations_by_months.roomOccupancyRateInTheFuture.currently_month != null">
                <RadialBar :labels="['precedently month', 'currently month']" :colors="['#00E396', '#F5222D']"
                    :series="[reservations_by_months.roomOccupancyRateInTheFuture.precedently_month < 1 ? 0 : reservations_by_months.roomOccupancyRateInTheFuture.precedently_month, reservations_by_months.roomOccupancyRateInTheFuture.currently_month < 1 ? 0 : reservations_by_months.roomOccupancyRateInTheFuture.currently_month]">
                </RadialBar>
            </Card>
        </div>

        <div class="container-row-around">
            <Card class="gap-20 mb-25 gap-reverse-20" title="Taux de remplissage" v-if="reservations_by_months.fillingRate != null">
                <RadialBar :labels="['']" :colors="['#F5222D']"
                    :series="[reservations_by_months.fillingRate < 1 ? 0 : reservations_by_months.fillingRate]"></RadialBar>
            </Card>
            <Card title="chiffre d'affaire" class="mb-25 gap-20"
                v-if="reservations_by_months.turnover.precedently_month != false && reservations_by_months.turnover.currently_month != false">
                <Bar :labels="['precedently month', 'currently month']"
                    :series="[{ name: '', data: [2988, 3560] }]">
                </Bar>
            </Card>
            <Card title="Nombre de réservation" class="mb-25"
                v-if="reservations_by_months.numberOfReservations.precedently_month != null && reservations_by_months.numberOfReservations.currently_month != null">
                <Line :height="'230px'" :width="'450px'" :colors="['#00E396', '#F5222D']" :title_bottom="'reservations'"
                    :title_left="'jours'"
                    :series="[{ name: 'precedently month', data: [reservations_by_months.numberOfReservations.precedently_month] }, { name: 'currently month', data: [reservations_by_months.numberOfReservations.currently_month] }]"
                    :categories="['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']">
                </Line>
            </Card>
        </div>

    </div>
</template>

<script>
import { dashboard2pdf, moneyStats } from "../../utils/vulcan_functions.js";
import { addDayToDate, averageTimeBetweenReservationAndCheckIn, roomOccupancyRateInTheFuture, fillingRate, numberOfReservations } from "../../utils/strategics_dashboard.js"

export default {
    name: "Strategics",
    data() {
        return {
            isLoading: false,
            precedently_month: null,
            currently_month: null,
            clone_precedently_month: null,
            clone_currently_month: null,
            error_message: null,
            reservations_by_months: {
                averageTimeBetweenReservationAndCheckIn: {
                    precedently_month: null,
                    currently_month: null
                },
                roomOccupancyRateInTheFuture: {
                    precedently_month: null,
                    currently_month: null
                },
                fillingRate: null,
                numberOfReservations: {
                    precedently_month: null,
                    currently_month: null
                },
                turnover: {
                    precedently_month: false,
                    currently_month: false
                }
            }
        }
    },
    methods: {
        onChange(date, dateString) {
            if (this.precedently_month === null) {
                this.precedently_month = addDayToDate(dateString);
            } else if (this.currently_month === null) {
                this.currently_month = addDayToDate(dateString);
            }
            this.checkApiCall();
        },
        async checkApiCall() {
            if (this.currently_month !== null && this.precedently_month !== null) {
                this.isLoading = true;
                this.clone_precedently_month = this.precedently_month;
                this.clone_currently_month = this.currently_month;
                this.precedently_month = null;
                this.currently_month = null;
                try {
                    await this.$dataStore.getReservationsByMonths(this.clone_precedently_month, this.clone_currently_month);
                    const error = this.$dataStore.error_message;
                    this.error_message = error != null ? error : null;
                    if (this.error_message == null) this.calculator();
                    this.isLoading = false;
                } catch (error) {
                    console.error(error);
                }
            }
        },
        calculator() {
            this.reservations_by_months.averageTimeBetweenReservationAndCheckIn.precedently_month = averageTimeBetweenReservationAndCheckIn(this.$dataStore.reservations_by_months.precedently_month);
            this.reservations_by_months.averageTimeBetweenReservationAndCheckIn.currently_month = averageTimeBetweenReservationAndCheckIn(this.$dataStore.reservations_by_months.currently_month);
            //todo graph 2: voir avec pierre si je peux réutiliser ses fonctions ?
            this.reservations_by_months.roomOccupancyRateInTheFuture.precedently_month = roomOccupancyRateInTheFuture(this.$dataStore.reservations_by_months.precedently_month);
            this.reservations_by_months.roomOccupancyRateInTheFuture.currently_month = roomOccupancyRateInTheFuture(this.$dataStore.reservations_by_months.currently_month);
            this.reservations_by_months.fillingRate = fillingRate();
            this.reservations_by_months.turnover.precedently_month = true;
            this.reservations_by_months.turnover.currently_month = true;
            this.reservations_by_months.numberOfReservations.precedently_month = numberOfReservations(this.$dataStore.reservations_by_months.precedently_month);
            this.reservations_by_months.numberOfReservations.currently_month = numberOfReservations(this.$dataStore.reservations_by_months.currently_month);
        }
    },
    onClick() {
        const dashboard = "strategics_dashboard";
        dashboard2pdf(document.getElementById(dashboard), dashboard);
    },
}

</script>
    
<style scoped>
.container-unique {
    display: flex;
    justify-content: center;
    align-items: center;
}

.container-column {
    display: flex;
    flex-flow: column wrap;
}

.container-row-around {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
}

.container-row-evenly {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
}


.month-picker {
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.gap-20 {
    margin-left: 20px;
}

.mb-25 {
    margin-bottom: 25px;
}

.gap-reverse-20 {
    margin-right: 20px;
}

.error {
    border-color: #00E396;
    border-inline-end-width: 1px;
    border-width: 2px;
    box-shadow: 0 0 0 2px rgba(255, 38, 5, .06);
    outline: 0;
}

.success {
    border-color: #F5222D;
    border-width: 2px;
    border-inline-end-width: 1px;
    box-shadow: 0 0 0 2px rgba(255, 38, 5, .06);
    outline: 0;
}

::placeholder {
    color: black;
    opacity: 1;
}

@media only screen and (max-width: 768px) {

    /* mobile - tablet */
    .month-picker {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}

p {
    margin-bottom: 0px;
}
</style>
