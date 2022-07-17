<script setup lang="ts">

import Table from "../components/table.vue";

const path = 'place'
const title = 'Place'
const column = [
  {key: 'address', label: 'Address', width: 'auto'},
  {key: 'total', label: 'Total sqm', width: 150},
  {key: 'usable', label: 'Usable sqm', width: 150},
  {key: 'rooms', label: 'Rooms', width: 150},
  {key: 'price', label: 'Price / month', width: 150},
  {key: 'notes', label: 'Notes', width: 'auto'},
]
</script>


<template>
  <Table :path="path" :column="column" :title="title" />
</template>
