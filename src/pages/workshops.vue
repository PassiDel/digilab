<script setup lang="ts">

import Table from "../components/table.vue";

const path = 'workshops'
const title = 'Workshops'
const column = [
  ['date', 'Date', 150, 'left'],
  ['name', 'Date', 'auto'],
  ['state', 'Date', 150],
  ['tag', 'Date', 150, 'right'],
]
</script>


<template>
  <Table :path="path" :column="column" :title="title" />
</template>
