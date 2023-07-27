<template>
	<div>
		<h1>Home</h1>

		<a-button type="primary">A button</a-button>

		<test-chart/>
	</div>
</template>

<script>

	import TestChart from "@/pages/home/TestChart.vue"

	export default {
		name: "HomePage",
		components: {TestChart}
	}
</script>

<style scoped>

	h1{
		/*color: v-bind("$theme.colorPrimary");*/
	}
</style>
