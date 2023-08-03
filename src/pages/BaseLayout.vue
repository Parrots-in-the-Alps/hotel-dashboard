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
    background-color: #607D8B;
    padding-top: 1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 1.5rem;
  }
  </style>