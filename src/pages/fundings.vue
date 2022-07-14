<script setup lang="ts">

import Table from "../components/table.vue";

const path = 'fundings'
const title = 'Fundings'
const column = [
  ['date', 'Date', 150, 'left'],
  ['name', 'Date', 'auto', false],
  ['state', 'Date', 'auto', false],
  ['city', 'Date', 'auto', false],
  ['address', 'Date', 'auto', false],
  ['zip', 'Zip', 'auto', false],
  ['tag', 'Date', 80, 'right'],
]
</script>

<template>
  <Table :path="path" :column="column" :title="title" />
</template>
