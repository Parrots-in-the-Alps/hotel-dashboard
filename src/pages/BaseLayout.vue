<template>
    <div>
      <NavBar />
    </div>
    <main>
      <router-view />
    </main>
  </template>
  
  <script>
  import NavBar from '../components/commons/NavBar.vue'
  export default {
    name: "BaseLayout"
  }
  </script>
  
  <style scoped></style>