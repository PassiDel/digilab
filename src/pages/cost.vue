<script setup lang="ts">
import {useCalcStore} from "../../store/calculator";
import {storeToRefs} from "pinia";

const curr = (num: string|number) => {
  return num.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
}

const calculator = useCalcStore()

const {form, cost} = storeToRefs(calculator)

const marks = (max: number, step: number = 1, min:number = 0, format: (value: number) => string = v => `${v}`) => {
  let mark: any = {}
  for (let i = min; i <= max; i += step)
    mark[i] = format(i)

  return mark
}
</script>

<template>
  <el-container>
    <el-aside width="250px" style="padding: 20px">
      <div>
        <h2>Cost</h2>
        <h3>Once</h3>
        <el-tooltip
            class="box-item"
            effect="dark"
            :content="position.tooltip"
            placement="top"
            v-for="position in cost.once.positions"
        >
          <p class="cost" >{{ position.name }}: {{ curr(position.amount) }}</p>
        </el-tooltip>
        <p class="cost total">{{ curr(cost.once.total) }}</p>
        <hr>
        <h3>Yearly</h3>
        <el-tooltip
            class="box-item"
            effect="dark"
            :content="position.tooltip"
            placement="top"
            v-for="position in cost.yearly.positions"
        >
          <p class="cost" >{{ position.name }}: {{ curr(position.amount) }}</p>
        </el-tooltip>
        <p class="cost total">{{ curr(cost.yearly.total) }}</p>
        <hr>
        <h3>Per year</h3>
        <p class="cost" v-for="(y, i) in cost.year">{{ i+1 }}. year {{ curr(y) }}</p>
      </div>
    </el-aside>
    <el-container>
      <el-main>
        <div id="side_bar" class="clearfix">
          <h2 style="float: left;">Cost Calculator</h2>
          <el-button type="danger" size="large" class="rightBtn" @click.prevent="calculator.reset()">Reset</el-button>
        </div>
        <h3>Purchases</h3>
        <div class="slider-with-label">
          <span class="label">People</span>
          <el-slider v-model="form.people" show-input />
        </div>
        <div class="slider-with-label">
          <span class="label">Price per student PC</span>
          <el-slider v-model="form.price_student_pc" show-input precision
                     :max="3000" :marks="marks(3500, 1000, 500, curr)"
                     :format-tooltip="curr"
          />
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
        <hr>
        <h3>Office</h3>
        <div class="slider-with-label">
          <span class="label">Square meter office</span>
          <el-slider v-model="form.sq" show-input
                     :max="1000" :marks="marks(1000, 300, 0, v => `${v} m²`)"
                     :format-tooltip="v => `${v} m²`"
          />
        </div>
        <div class="slider-with-label">
          <span class="label">Monthly price per square meter</span>
          <el-slider v-model="form.sq_price" show-input
                     :max="30" :marks="marks(30, 10, 0, v => `${curr(v)} / m²`)"
                     :format-tooltip="v => `${curr(v)} / m²`"
          />
        </div>
        <hr>
        <h3>Salaries</h3>
        <div class="slider-with-label">
          <span class="label">Salary E11</span>
          <el-slider v-model="form.salary" show-stops :min="1" :max="6" :marks="marks(6, 1, 1)"/>
        </div>
        <div class="slider-with-label">
          <span class="label">Trainer (Half time)</span>
          <el-slider v-model="form.trainer" show-stops :min="0" :max="10" :marks="marks(10, 5)"/>
        </div>
        <div class="slider-with-label">
          <span class="label">Administration (Quarter time)</span>
          <el-slider v-model="form.admin" show-stops :min="0" :max="10" :marks="marks(10, 5)"/>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<style scoped>
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
  margin-right: 15px;
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
