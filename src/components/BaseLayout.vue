<template>
<a-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Dashboards
      <DownOutlined />
    </a>
  
      <a-menu>
        <a-menu-item key="0">
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            Dashboard stratégique
          </a>
        </a-menu-item>
        <a-menu-item key="1">
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            Dashboard opérationnel
          </a>
        </a-menu-item>
        <a-menu-item key="3">Dashboard Tactique</a-menu-item>
      </a-menu>
 
  </a-dropdown>
	<main>
		<router-view/>
		
	</main>
	
</template>

<script>
	export default {
		name: "BaseLayout"
	}
</script>

<style scoped>

</style>
