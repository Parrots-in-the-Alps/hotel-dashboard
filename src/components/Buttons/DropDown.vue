<template>
    <a-dropdown >
        <a class="ant-dropdown-link" @click.prevent>
            Dashboards
            <DownOutlined />
        </a>
        <template #overlay>
            <a-menu>
                <a-menu-item key="0">
                    <router-link to="/">
                        Home
                    </router-link>
                </a-menu-item>
                <a-menu-item key="1">
                    <router-link to="ops">
                        Dashboard Opérationnel
                    </router-link>
                </a-menu-item>
                <a-menu-item key="2">
                    <router-link to="tactics">
                        Dashboard Tactique
                    </router-link></a-menu-item>
                <a-menu-item key="3">
                    <router-link to="strategics">
                        Dashboard Stratégique
                    </router-link></a-menu-item>
            </a-menu>
        </template>
    </a-dropdown>
</template>
    
<script>
export default {
    name: "DropDown"
}
</script>
    
<style scoped>
   
</style>
    