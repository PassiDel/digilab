<script setup lang="ts">

import Table from "../components/table.vue";

const path = 'workshops'
const title = 'Workshops'
const column = [
  {key: 'type', label: 'Type', width: 150, fix: 'left'},
  {key: 'name', label: 'name', width: 'auto'},
  {key: 'responsible', label: 'Responsible', width: 150},
  {key: 'max', label: 'Max students', width: 150},
  {key: 'date', label: 'Date', width: 150},
  {key: 'duration', label: 'Duration', width: 150},
]
</script>


<template>
  <Table :path="path" :column="column" :title="title" />
</template>
