<script setup lang="ts">

import Table from "../components/table.vue";

const path = 'fundings'
const title = 'Fundings'
const column = [
  {key: 'date', label: 'Date', width: 150, fix: 'left'},
  {key: 'name', label: 'Date', width: 'auto'},
  {key: 'state', label: 'Date', width: 'auto'},
  {key: 'city', label: 'Date', width: 'auto'},
  {key: 'address', label: 'Date', width: 'auto'},
  {key: 'zip', label: 'Zip', width: 'auto'},
  {key: 'tag', label: 'Date', width: 80, fix: 'right'},
]
</script>

<template>
  <Table :path="path" :column="column" :title="title" />
</template>
