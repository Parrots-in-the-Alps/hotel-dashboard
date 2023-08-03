<template>
    <a-dropdown>
        <a class="ant-dropdown-link" @click.prevent>
            <p class="dropdownstyle">
                Dashboards 
            </p>
            
        </a>
        <template #overlay>
            <a-menu >
                <a-menu-item key="0"  class="dropdown" @click="this.setParentTitle('ACCUEIL')">
                    <router-link to="/">
                        Accueil
                    </router-link>
                </a-menu-item>
                <a-menu-item key="1" class="dropdown" @click="this.setParentTitle('DASHBOARD OPERATIONNEL')">
                    <router-link to="ops">
                        Dashboard Opérationnel
                    </router-link>
                </a-menu-item>
                <a-menu-item key="2" class="dropdown" @click="this.setParentTitle('DASHBOARD TACTIQUE')">
                    <router-link to="tactics">
                        Dashboard Tactique
                    </router-link></a-menu-item>
                <a-menu-item key="3" class="dropdown" @click="this.setParentTitle('DASHBOARD STRATEGIQUE')">
                    <router-link to="strategics">
                        Dashboard Stratégique
                    </router-link></a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>
    
<script>
export default {
    name: "DropDown",
    emits: ['setTitle'],
    methods: {
        setParentTitle(title){
            this.$emit('setTitle',title);
        }
    }
}
</script>
    
<style scoped>
.dropdownstyle{
    
}

</style>
    