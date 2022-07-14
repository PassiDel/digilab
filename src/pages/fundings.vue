<script setup lang="ts">

import Table from "../components/table.vue";

const path = 'fundings'
const title = 'Fundings'
const column = [
  ['date', 'Date', 150, 'left'],
  ['name', 'Date', 'auto'],
  ['state', 'Date', 'auto'],
  ['city', 'Date', 'auto'],
  ['address', 'Date', 'auto'],
  ['zip', 'Zip', 'auto'],
  ['tag', 'Date', 80, 'right'],
]
</script>

<template>
  <Table :path="path" :column="column" :title="title" />
</template>
