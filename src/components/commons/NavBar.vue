<template>
  <div class="navbar">
    <a-row type="flex" justify="space-between">
      <a-col :span="6">
        <DropDown />
      </a-col>
      <a-col :span="12">

      </a-col>
    </a-row>
  </div>
</template>

<script>
import DropDown from "../Buttons/DropDown.vue"
export default {
  name: "NavBar"
}
</script>

<style scoped></style>

