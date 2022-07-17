<script setup lang="ts">
import SideButton from "./components/sideButton.vue";
import {useDummyStore} from "../store/dummy";
const dummy = useDummyStore()
</script>

<template>
  <div class="common-layout">
    <el-container style="height: 100vh;">
      <el-header>
        <router-link to="/" style="text-decoration: none; color: black">
          <h1>Plan your digital Lab</h1>
        </router-link>
      </el-header>

      <el-container>
        <el-aside width="250px" class="sidebar">
          <h2 style="color: white; font-size: xxx-large; margin: 0">TOOL</h2>
          <side-button to="/place">Place</side-button>
          <side-button to="/staff">Staff</side-button>
          <side-button to="/cost">Cost</side-button>
          <side-button to="/fundings">Fundings</side-button>
          <side-button to="/hardware">Hardware</side-button>
          <side-button to="/furniture">Furniture</side-button>
          <side-button to="/workshops">Workshops</side-button>
          <side-button to="/marketing">Marketing</side-button>
          <side-button to="/network">Network</side-button>
          <side-button to="/contacts">Contacts</side-button>
          <el-button type="danger" :plain="true" size="large" class="resetBtn" @click="dummy.reset()">Reset</el-button>
        </el-aside>
        <el-container style="margin: 10px; border: solid black 2px">
          <router-view></router-view>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: var(--el-text-color-regular);
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

.clearfix {
  overflow: auto;
}
.rightBtn {
  margin-top: 0.23em;
  float: right;
  position: relative;
  top: 10px;
  right: 10px;
}
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
  padding: 12px;
  background-color: var(--el-text-color-regular);
}
.resetBtn {
  margin-top: 3rem;
  width: 50%;
}
</style>
