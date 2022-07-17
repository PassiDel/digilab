<script setup lang="ts">

import Table from "../components/table.vue";

const path = 'contacts'
const title = 'Contacts'
const column = [
  {key: 'name', label: 'Name', width: 150},
  {key: 'address', label: 'Address', width: 'auto'},
  {key: 'tel', label: 'Telephone', width: 150},
  {key: 'function', label: 'Function', width: 'auto'},
  {key: 'notes', label: 'Notes', width: 'auto'},
]
</script>


<template>
  <Table :path="path" :column="column" :title="title" />
</template>
