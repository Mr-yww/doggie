<template>
  <div class="spaceCenter" style="background-color: #545c64;">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"ß
      active-text-color="#ffd04b"
    >      
      <el-menu-item index="1">技术博客</el-menu-item>
      <el-menu-item index="2">写作</el-menu-item>
      <el-menu-item index="3">图片</el-menu-item>
      <el-menu-item index="4">关于</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style "scoped">
  .homeNav {
    position: absolute;
    width: 500px;
    min-width: 300px;
    height: 80px;
    left: 0px;
    top: 0px;
    background-color: #545c64;
  }
</style>
