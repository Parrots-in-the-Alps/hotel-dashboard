<template>
	<div>
		<button @click="login">Login</button>
	</div>
</template>

<script>
	export default {
		name: "LoginForm",
		data(){
			return {
				credentials: {
					email: "",
					password: ""
				}
			}
		},
		methods: {
			async login(){
				await this.$userStore.login(this.credentials)
			}
		}
	}
</script>

<style scoped>

</style>
