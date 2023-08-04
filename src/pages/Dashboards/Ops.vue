<template>
    <div class="layout">
        <FluxClient />
        <FluxResto />
    </div>
</template>
    
<script>
import FluxClient from '../../components/dashboards/ops/FluxClient.vue'
import FluxResto from '../../components/dashboards/ops/FluxResto.vue'
export default {
    name: "Ops"
}
</script>
    
<style scoped>
.layout {
    display: flex;
    flex-direction: column;
    gap: 5rem;
}
</style>