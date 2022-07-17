<script setup lang="ts">

import Table from "../components/table.vue";

const path = 'fundings'
const title = 'Fundings'
const column = [
    // name, €, von, bis
  {key: 'date', label: 'Date', width: 150, fix: 'left'},
  {key: 'money', label: 'Money', width: 150},
  {key: 'name', label: 'Name', width: 'auto'},
  {key: 'fromm', label: 'From', width: 150},
  {key: 'from', label: 'From date', width: 150},
  {key: 'to', label: 'To date', width: 150},
]
</script>

<template>
  <Table :path="path" :column="column" :title="title" />
</template>
