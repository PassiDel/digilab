<script setup lang="ts">

import Table from "../components/table.vue";

const path = 'staff'
const title = 'Staff'
const column = [
  {key: 'name', label: 'Name', width: 150, fix: 'left'},
  {key: 'address', label: 'Address', width: 'auto'},
  {key: 'email', label: 'Email', width: 150},
  {key: 'tel', label: 'Telephone', width: 150},
  {key: 'salary', label: 'Salary', width: 150},
  {key: 'position', label: 'Position', width: 150, fix: 'right'},
]
</script>


<template>
  <Table :path="path" :column="column" :title="title" />
</template>
