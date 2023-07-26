<template>
	<div>
		<h1>Login</h1>

		<login-form/>
	</div>
</template>

<script>
	import LoginForm from "./LoginForm.vue"

	export default {
		name: "LoginPage",
		components: {LoginForm}
	}
</script>

<style scoped>

</style>
