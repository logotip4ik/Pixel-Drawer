<template>
  <div class="box" :style="[`background: ${color}`,].join('; ')"></div>
</template>

<script>
export default {
  name: 'Box',
  props: {
    color: {
      type: String,
      required: true,
      default: 'transparent',
    },
  },
};
</script>

<style scoped>
.box {
  width: 2rem;
  height: 2rem;
  border: 1px solid grey;
}
</style>

