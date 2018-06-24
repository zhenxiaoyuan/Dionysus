<template>
    <div id="app-header">
        <el-row type="flex" justify="center" align="middle" class="header">
            <router-link to="/">
                <img src="@/assets/images/Dionysus-white.png" class="logo" />
                <span class="header-app-name">{{appName}}</span>
            </router-link>
        </el-row>
    </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: ["appName"]
};
</script>

<style>
.header {
  height: 100px;
}
.header-app-name {
  padding-left: 20px;
  font-size: 46px;
  color: white;
}
.logo {
  height: 60px;
  widows: 60px;
}
</style>


