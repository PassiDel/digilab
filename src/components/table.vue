<script setup lang="ts">
import {computed} from "vue";
import Column from "../components/column.vue";
import {storeToRefs} from "pinia";
import {useDummyStore} from "../../store/dummy";
import { onBeforeRouteLeave } from 'vue-router'

const {path, column, title} = defineProps<{
  path: string,
  column: [
    string,
    string,
    number | string,
    string?
  ],
  title: string
}>()

const dummy = useDummyStore()
const data: any = storeToRefs(dummy)
const tableData = data[path]

const isEditing = computed({
  get() {
    return tableData.value.reduce((acc: boolean, cur: any) => acc || cur.editing, false)
  },
  set(newValue) {
    tableData.value.forEach((d: any) => d.editing = newValue)
  }
})

const handleDelete = (index: number) => {
  tableData.value.splice(index, 1)
}
onBeforeRouteLeave( () => {
  isEditing.value = false
})
</script>

<template>
  <el-main>
    <div class="clearfix">
      <h3 style="float: left;">{{ title }}</h3>
      <el-button-group class="ml-4 rightBtn">
        <el-button type="primary" size="small" @click="tableData.push({})"
        >Add</el-button
        >
        <el-button :disabled="!isEditing" type="success" size="small" @click="isEditing = false"
        >Save</el-button
        >
      </el-button-group>
    </div>
    <el-table :data="tableData" style="width: 100%" @row-dblclick="row => row.editing = true">
      <el-table-column type="index" label="#" :width="40" fixed />
      <el-table-column v-for="c in column"
                       :prop="c[0]" :label="c[1]" :width="c[2]" :fixed="c[3] || false">
        <template #default="scope">
          <Column :scope="scope" :prop="c[0]" />
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
          <el-button v-if="scope.row.editing" link type="success" style="width: 35px" size="small" @click="scope.row.editing = false"
          >Save</el-button
          >
          <el-button v-else link type="primary" style="width: 35px" size="small" @click="scope.row.editing = true">Edit</el-button>
          <el-button link type="danger" size="small" @click="handleDelete(scope.$index)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-main>
</template>

