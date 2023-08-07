<template>
  <a-form
    :model="credentials"
    name="loginForm"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="login"
    @finishFailed="onFinishFailed"
	class="custom-form"
  >
    <a-form-item
      label="Email"
      name="email"
      :rules="[{ required: true, message: 'Please input your email!' }]"
    >
      <a-input v-model:value="credentials.email" />
    </a-form-item>

    <a-form-item
      label="Password"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="credentials.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Login</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: "LoginForm",
  data() {
    return {
      credentials: {
        email: "",
        password: ""
      }
    };
  },
  setup() {
    const formState = reactive({
      remember: true,
    });

    const onFinish = values => {
      console.log('Success:', values);
    };

    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };

    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
  methods: {
    async login() {
      // TODO do some validations first
      await this.$userStore.login(this.credentials);
      await this.$userStore.getReservationsOnDates();
    }
  }
};
</script>

<style scoped>

.custom-form {
  width: 700px;/* Définissez la largeur souhaitée du formulaire ici */
}


</style>
