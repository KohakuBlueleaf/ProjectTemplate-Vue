<template>
  <div class="container-fluid h-100">
    <div class="d-flex h-100">
      <div class="flex-shrink-1">
        <el-menu
          default-active="2"
          style="width: 200px"
          router
        >
          <el-menu-item index="/">
            <span>Home</span>
          </el-menu-item>
          <el-menu-item index="/something">
            <span>Something</span>
          </el-menu-item>
        </el-menu>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
</script>