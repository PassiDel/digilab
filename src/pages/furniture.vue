<script setup lang="ts">

import Table from "../components/table.vue";

const path = 'furniture'
const title = 'Furniture'
const column = [
  {key: 'type', label: 'Type', width: 150, fix: 'left'},
  {key: 'vendor', label: 'Vendor', width: 150},
  {key: 'name', label: 'Name', width: 200},
  {key: 'price', label: 'Price', width: 150},
  {key: 'amount', label: 'Amount', width: 150},
  {key: 'notes', label: 'Notes', width: 'auto'},
]
</script>


<template>
  <Table :path="path" :column="column" :title="title" />
</template>
