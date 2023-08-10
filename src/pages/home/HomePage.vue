<template>
  <a-row align="top" class="toto">
    <a-col :span="6">
      <Loading :bgColorSquare1="getRandomColor()"
       :bgColorSquare2="getRandomColor()"
        :bgColorSquare3="getRandomColor()"
         :bgColorSquare4="getRandomColor()"
          :bgColorSquare5="getRandomColor()"></Loading>
    </a-col>
    <a-col :span="6">
      <Loading :bgColorSquare1="getRandomColor()"
       :bgColorSquare2="getRandomColor()"
        :bgColorSquare3="getRandomColor()"
         :bgColorSquare4="getRandomColor()"
          :bgColorSquare5="getRandomColor()"></Loading>
    </a-col>
    <a-col :span="6">
      <Loading :bgColorSquare1="getRandomColor()"
       :bgColorSquare2="getRandomColor()"
        :bgColorSquare3="getRandomColor()"
         :bgColorSquare4="getRandomColor()"
          :bgColorSquare5="getRandomColor()"></Loading>
    </a-col>
    <a-col :span="6">
      <Loading :bgColorSquare1="getRandomColor()"
       :bgColorSquare2="getRandomColor()"
        :bgColorSquare3="getRandomColor()"
         :bgColorSquare4="getRandomColor()"
          :bgColorSquare5="getRandomColor()"></Loading>
    </a-col>
    <a-col :span="6">
      <Loading :bgColorSquare1="getRandomColor()"
       :bgColorSquare2="getRandomColor()"
        :bgColorSquare3="getRandomColor()"
         :bgColorSquare4="getRandomColor()"
          :bgColorSquare5="getRandomColor()"></Loading>
    </a-col>
    <a-col :span="6">
      <Loading :bgColorSquare1="getRandomColor()"
       :bgColorSquare2="getRandomColor()"
        :bgColorSquare3="getRandomColor()"
         :bgColorSquare4="getRandomColor()"
          :bgColorSquare5="getRandomColor()"></Loading>
    </a-col>
    <a-col :span="6">
      <Loading :bgColorSquare1="getRandomColor()"
       :bgColorSquare2="getRandomColor()"
        :bgColorSquare3="getRandomColor()"
         :bgColorSquare4="getRandomColor()"
          :bgColorSquare5="getRandomColor()"></Loading>
    </a-col>
    <a-col :span="6">
      <Loading :bgColorSquare1="getRandomColor()"
       :bgColorSquare2="getRandomColor()"
        :bgColorSquare3="getRandomColor()"
         :bgColorSquare4="getRandomColor()"
          :bgColorSquare5="getRandomColor()"></Loading>
    </a-col>
    <a-col :span="6">
      <Loading :bgColorSquare1="getRandomColor()"
       :bgColorSquare2="getRandomColor()"
        :bgColorSquare3="getRandomColor()"
         :bgColorSquare4="getRandomColor()"
          :bgColorSquare5="getRandomColor()"></Loading>
    </a-col>
    <a-col :span="6">
      <Loading :bgColorSquare1="getRandomColor()"
       :bgColorSquare2="getRandomColor()"
        :bgColorSquare3="getRandomColor()"
         :bgColorSquare4="getRandomColor()"
          :bgColorSquare5="getRandomColor()"></Loading>
    </a-col>
    <a-col :span="6">
      <Loading :bgColorSquare1="getRandomColor()"
       :bgColorSquare2="getRandomColor()"
        :bgColorSquare3="getRandomColor()"
         :bgColorSquare4="getRandomColor()"
          :bgColorSquare5="getRandomColor()"></Loading>
    </a-col>
    <a-col :span="6">
      <Loading :bgColorSquare1="getRandomColor()"
       :bgColorSquare2="getRandomColor()"
        :bgColorSquare3="getRandomColor()"
         :bgColorSquare4="getRandomColor()"
          :bgColorSquare5="getRandomColor()"></Loading>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: "HomePage",
  data: function () {
    return {

    }
  },
  methods: {
    getRandomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    },
  }
}
</script>

<style scoped>
.toto{
  margin-top: 0px;
}
</style>
