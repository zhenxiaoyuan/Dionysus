<template>
    <div id="app-header">
        <el-row type="flex" justify="center" align="middle">
            <img src="@/assets/images/Dionysus.svg" class="logo" />
            <span class="header-app-name">{{appName}}</span>
        </el-row>
    </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: ['appName']
};
</script>

<style>
.el-row {
    height: 100px;
}
.header-app-name {
  padding-left: 20px;
  font-size: 46px;
}
.logo {
  height: 60px;
  widows: 60px;
}
</style>


