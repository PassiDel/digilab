<script setup lang="ts">

const {prop, scope} = defineProps<{
  prop: string,
  scope: any

}>()

</script>

<template>
  <input v-model="scope.row[prop]" v-if="scope.row.editing" style="width: 100%">
  <span v-else>{{ scope.row[prop] }}</span>
</template>

<style>
.cell {
  text-overflow: unset!important;
}
</style>
