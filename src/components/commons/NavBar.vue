<template>
  <div class="navbar">
      <div class="leftDiv">
        <DropDown @setTitle="this.setTitle" />
      </div>
      <div class="centerDiv">
          {{ this.title }}
      </div>
      <div class="rightDiv">
        <DropDown />
      </div>
  </div>
</template>

<script>
import { stringType } from "ant-design-vue/es/_util/type";
import DropDown from "../Buttons/DropDown.vue"
export default {
  name: "NavBar",
  data() {
    return {
      title: 'ACCUEIL'
    }
  },
  methods: {
    setTitle(title) {
      this.title = title;
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cinzel&display=swap');
.leftDiv {
  display: flex;
  justify-content: start;
  width: 25%;
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
  font-size: 1rem;
  color: #FF9800;
}

.row{
  height:5rem;
}

</style>

