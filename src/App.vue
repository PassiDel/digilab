<script setup lang="ts">

import {computed, ref} from "vue";

const form = ref({
  people: 20,
  price_student_pc: 500,
  aux_quality: 1,
  tech: false
})

const cost = computed(() => {
  const positions_once= [
    {amount: form.value.people * form.value.price_student_pc, name: 'Computer'},
    ...Object.values({ ...( form.value.aux_quality > 0 && [ {amount: form.value.aux_quality * 3000 , name: 'Auxiliary'}]) }),
    ...Object.values({ ...( form.value.tech && [{amount: 3000 , name: 'Tech infrastructure'}]) })
  ]
  return {
    once: {
      positions: positions_once,
      total: positions_once.reduce((p, c) => p + c.amount, 0)
    },
    yearly: {
      total: 0,
      positions: []
    }
  }
})

const marks = (max: number, step: number = 1, min:number = 0, format: (value: number) => string = v => `${v}`) => {
  let mark: any = {}
  for (let i = min; i <= max; i += step)
    mark[i] = format(i)

  return mark
}
</script>

<template>
  <div class="common-layout">
    <el-container style="height: 100vh;">
      <el-header>
        <h1>Plan your digital Lab</h1>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <div class="stick">
            <h2>Kosten</h2>
            <h3>Einmalig</h3>
            <p class="cost" v-for="position in cost.once.positions">{{ position.name }}: {{ position.amount }} €</p>
            <p class="cost total">{{ cost.once.total }} €</p>
            <hr>
            <h3>Jährlich</h3>
            <p class="cost" v-for="position in cost.yearly.positions">{{ position.name }}: {{ position.amount }} €</p>
            <p class="cost total">{{ cost.yearly.total }} €</p>
          </div>
        </el-aside>
        <el-container>
          <el-main>
            <h2>Cost Calculator</h2>
            <div class="slider-with-label">
              <span class="label">People</span>
              <el-slider v-model="form.people" show-input />
            </div>
            <div class="slider-with-label">
              <span class="label">Price per student PC</span>
              <el-slider v-model="form.price_student_pc" show-input precision :max="3000" :marks="marks(3500, 1000, 500, v => `${v} €`)" />
            </div>
            <div class="slider-with-label">
              <span class="label">Quality of auxiliary equipment</span>
              <el-slider v-model="form.aux_quality" show-stops :max="3" :marks="{
                0: 'No Equipment',
                1: 'Some',
                2: 'More',
                3: 'A lot'
              }"/>
            </div>
            <div class="slider-with-label">
              <span class="label">Tech infrastructure</span>
              <el-switch
                  v-model="form.tech"
                  class="mb-2"
                  style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"
                  active-text="Already present"
                  inactive-text="Needs to be bought"
              />
            </div>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style>
body {
  margin: 0;
}
.el-header {
  background-color: var(--el-color-primary-dark-2);
}
.el-aside {
  background-color: var(--el-fill-color-darker);
}
.el-main {
  background-color: var(--el-bg-color-page);
}
.el-footer {
  background-color: var(--el-color-black);
  color: var(--el-color-white);
}
.stick {
  position: sticky;
  top: 0;
  padding-left: 10px;
  padding-right: 10px;
}
.cost {
  text-align: right;
}
.total {
  font-weight: bold;
}
.slider-with-label {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
.slider-with-label .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
.slider-with-label .label {
  font-size: 14px;
  color: var(--el-text-color-primary);
  line-height: 44px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}
.slider-with-label .label + .el-slider {
  flex: 0 0 75%;
}
.slider-with-label .label + .el-switch {
  flex: 0 0 75%;
}
</style>
