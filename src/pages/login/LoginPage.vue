<template>
	<div class="centered-container">
	
		<Card title="login">
		<LoginForm/>
	</Card>
	  
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

.centered-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Assurez-vous que le conteneur occupe au moins 100% de la hauteur de la fenêtre visible */
}

</style>
