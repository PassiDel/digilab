<script setup lang="ts">

import Table from "../components/table.vue";

const path = 'contacts'
const title = 'Contacts'
const column = [
  ['date', 'Date', 150, 'left'],
  ['name', 'Date', 'auto', false],
  ['state', 'Date', 150, false],
  ['tag', 'Date', 150, 'right'],
]
</script>


<template>
  <Table :path="path" :column="column" :title="title" />
</template>
