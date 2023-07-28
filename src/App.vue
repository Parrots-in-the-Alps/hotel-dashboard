<template>
	<!-- Our custom theme is provided here for our whole app-->
	<a-config-provider :theme="{ token: $options.customTheme }">
		<RouterView/>
	</a-config-provider>
</template>

<script>

	import { customTheme } from "./plugins/antDesignPlugin.js"

	export default {
		customTheme
	}

</script>

<style scoped>

</style>
