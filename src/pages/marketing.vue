<script setup lang="ts">

import Table from "../components/table.vue";

const path = 'marketing'
const title = 'Marketing'
const column = [
  {key: 'provider', label: 'Provider', width: 150, fix: 'left'},
  {key: 'type', label: 'Type', width: 150},
  {key: 'reach', label: 'Reach', width: 'auto'},
  {key: 'cost', label: 'Cost', width: 150},
  {key: 'notes', label: 'Notes', width: 'auto'},
]
</script>


<template>
  <Table :path="path" :column="column" :title="title" />
</template>
