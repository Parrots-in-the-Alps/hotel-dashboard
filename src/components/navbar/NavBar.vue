<template>
  <div class="navbar">
      <div class="leftDiv">
        <DropDown @setTitle="this.setTitle"/>
      </div>
      <div class="centerDiv">
          {{ this.$userStore.title }}
      </div>
      <div class="rightDiv">
        <UserNavBar @resetTitle="resetTitle"/>
      </div>
  </div>
</template>

<script>
import DropDown from "../navbar/elements/DropDown.vue"
import UserNavBar from "../navbar/elements/UserNavBar.vue"
export default {
  name: "NavBar",
  data() {
    return {
      title: 'login'
    }
  },
  methods: {
    setTitle(title) {
      if(this.$userStore.logged == true){
      this.title = title;
      }
    },
    resetTitle() {
      this.title = this.setTitle(title);
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');
.leftDiv {
  display: flex;
  justify-content: start;
  align-content:center;
  width: 25%;
  font-family: 'Cinzel', serif;
  font-size: 1rem;
  color: #FF9800;
}

.centerDiv {
  display: flex;
  justify-content: center;
  width: 50%;
  font-family: 'Cinzel', serif;
  font-size: 2rem;
  color: #FF9800;
}

.rightDiv {
  display: flex;
  justify-content: end;
  width: 25%;
  font-family: 'Cinzel', serif;
  font-size: 1rem;
  color: #FF9800;
}
</style>

