<template>
    <div>
        <a-row type="flex" justify="space-around">
            <a-col :span="14"></a-col>
            <a-col :span="3">
                <a-month-picker placeholder="Mois précédent" @change="onChange" />
            </a-col>
            <a-col :span="3">
                <p class="center-text">Par rapport à</p>
            </a-col>
            <a-col :span="3">
                <a-month-picker placeholder="Mois en cours" @change="onChange" />
            </a-col>
        </a-row>
    </div>
</template>

<script>

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
    },
}
</script>
    
<style scoped>
.center-text {
    text-align: center
}

</style>