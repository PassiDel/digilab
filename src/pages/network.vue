<script setup lang="ts">

import Table from "../components/table.vue";

const path = 'network'
const title = 'Network'
const column = [
  {key: 'name', label: 'Name', width: 150, fix: 'left'},
  {key: 'area', label: 'Area', width: 150},
  {key: 'address', label: 'Address', width: 'auto'},
  {key: 'email', label: 'Email', width: 300},
  {key: 'tel', label: 'Telephone', width: 150},
  {key: 'notes', label: 'Notes', width: 'auto'},
]
</script>


<template>
  <Table :path="path" :column="column" :title="title" />
</template>
