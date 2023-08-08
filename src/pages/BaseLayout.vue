<template>
    <div>
      <NavBar />
    </div>
    <main class="bodybodymassage">
      <router-view />
    </main>
  </template>
  
  <script>
  import NavBar from '../components/navbar/NavBar.vue'
  export default {
    name: "BaseLayout"
  }
  </script>
  
  <style scoped>
  .bodybodymassage{
    height: auto;
    background-color: #607D8B;
    padding: 1.5rem;
  }
  </style>