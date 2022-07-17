<script setup lang="ts">

import Table from "../components/table.vue";

const path = 'furniture'
const title = 'Furniture'
const column = [
  // typ, preis, stück
  {key: 'date', label: 'Date', width: 150, fix: 'left'},
  {key: 'name', label: 'Date', width: 'auto'},
  {key: 'state', label: 'Date', width: 150},
  {key: 'tag', label: 'Date', width: 150, fix: 'right'},
]
</script>


<template>
  <Table :path="path" :column="column" :title="title" />
</template>
