<template>
	<div>
		<a-button type="primary" @click="login">Login</a-button>
	</div>
</template>

<script>
	export default {
		name: "LoginForm",
		data() {
			return {
				credentials: {
					email: "",
					password: ""
				}
			}
		},
		methods: {
			async login() {
				// TODO do some validations first

				await this.$userStore.login(this.credentials)
			}
		}
	}
</script>

<style scoped>

</style>
