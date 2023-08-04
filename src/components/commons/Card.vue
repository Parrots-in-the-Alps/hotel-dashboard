<template>
  <div>
    <a-card :title="title" size="small" style="box-shadow: 2px 2px 3px black" bodyStyle="background-color: #607D8B;" class="card">
      <slot></slot>
    </a-card>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true,
    },
    setup(props) {
      console.log(props.title)
    }
  }
}
</script>
<style scoped>
.card {
  height: fit-content;
  padding:0px;
}
</style>