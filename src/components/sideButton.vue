<script setup lang="ts">
const {to, title} = defineProps<{
  to: string
}>()
</script>

<template>
  <router-link :to="to" v-slot="{isActive}">
    <el-button type="primary" :plain="!isActive" size="large"><slot></slot></el-button>
  </router-link>
</template>

<style scoped>
.el-button {
  width: 200px;
}
a {
  text-decoration: none;
}
</style>
