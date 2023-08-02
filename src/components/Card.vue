<template>
    <div>
      <a-card :title="title">
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
        }
    },
    setup(props) {
    console.log(props.title)
  }
}
</script>