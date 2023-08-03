<template>
  <div class="navbar">
    <a-row type="flex" justify="space-between">
      <a-col :span="12">
        <DropDown />
      </a-col>
    </a-row>
  </div>
  <main>
    <router-view />
  </main>
</template>

<script>
import DropDown from "../Buttons/DropDown.vue"
export default {
  name: "NavBar"
}
</script>

<style scoped></style>

