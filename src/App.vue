<template>
  <RouterView />
</template>

<style>
#app{
  height: 100vh;
}
body {
    margin: 0;
    width: 100%;
    min-width: 320px;
    min-height: 100vh;
    line-height: 1.4;
    font-size: 16px;
    font-weight: 400;
    color: var(--text-color);
    background-color: var(--bg-color);
    direction: ltr;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color var(--el-transition-duration-fast);
    overflow: overlay;
}
</style>