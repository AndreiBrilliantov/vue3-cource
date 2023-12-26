<template>
  <select v-model="modelValue">
  <option disabled value="">Выберите....</option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue:1
  }
}
</script>

<style lang="scss" scoped>

</style>