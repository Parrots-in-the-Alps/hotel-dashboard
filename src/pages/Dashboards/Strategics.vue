<template>
    <div class="container-column" id="strategics_dashboard">

        <div class="month-picker mb-25">
            <a-month-picker class="gap-20 error" placeholder="Mois précédent" @change="onChange" />
            <p class="gap-20">Par rapport à</p>
            <a-month-picker class="gap-20 success" placeholder="Mois en cours" @change="onChange" />
            <button type="button" class="gap-20" @click="onClick">Download to PDF</button>
        </div>

        <div class="container-row-evenly mb-25">
            <Card class="gap-20 mb-25" title="Temps entre réservation et check-in moyen">
                <Line :height="'230px'" :width="'450px'" :colors="['#00E396', '#F5222D']"
                    :series="[{ name: 'truc 1', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }, { name: 'truc 2', data: [120, 95, 90, 85, 80, 85, 90, 95, 65] }]">
                </Line>
            </Card>
            <Card class="gap-20 mb-25" title="Temps d'accueil moyen">
                <Line :height="'230px'" :width="'450px'" :colors="['#00E396', '#F5222D']"
                    :series="[{ name: 'truc 1', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }, { name: 'truc 2', data: [120, 95, 90, 85, 80, 85, 90, 95, 65] }]">
                </Line>
            </Card>
            <Card class="gap-20 mb-25" title="Taux de remplissage moyen">
                <Line :height="'230px'" :width="'450px'" :colors="['#00E396', '#F5222D']"
                    :series="[{ name: 'truc 1', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }, { name: 'truc 2', data: [120, 95, 90, 85, 80, 85, 90, 95, 65] }]">
                </Line>
            </Card>
        </div>

        <div class="container-unique mb-25">
            <Card class="height mb-25" title="Temps de remplissage">
                <Line :height="'230px'" :width="'1300px'" :colors="['#00E396', '#F5222D']" class="blabla"
                    :series="[{ data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }]"></Line>
            </Card>
        </div>

        <!-- TODO: faire des media query pour les width des graphs en longeurs -->

        <div class="container-row-around">
            <Card title="Temps entre réservation et check-in moyen" class="mb-25">
                <Line :height="'230px'" :width="'450px'" :colors="['#00E396', '#F5222D']"
                    :series="[{ name: 'truc 1', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }, { name: 'truc 2', data: [120, 95, 90, 85, 80, 85, 90, 95, 65] }]">
                </Line>
            </Card>
            <Card title="Temps entre réservation et check-in moyen" class="mb-25">
                <Line :height="'230px'" :width="'450px'" :colors="['#00E396', '#F5222D']"
                    :series="[{ name: 'truc 1', data: [10, 41, 35, 51, 49, 62, 69, 91, 148] }, { name: 'truc 2', data: [120, 95, 90, 85, 80, 85, 90, 95, 65] }]">
                </Line>
            </Card>
        </div>

    </div>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
    name: "Strategics",
    data() {
        return {

        }
    },
    methods: {
        onChange(date, dateString) {
            //   console.log(date, dateString);
        },
        onClick() {
            const strategics_dashboard = document.getElementById('strategics_dashboard');
            html2pdf(strategics_dashboard, {
                jsPDF: { unit: "in", format: "b4", orientation: "l" },
                filename: "toto_fait_des_pdf_avec_son_nez.pdf",
                pagebreak: {mode: 'avoid-all'}
            });
        }
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
}</style>
