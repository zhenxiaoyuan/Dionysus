<template>
    <div class="header-nav">
        <el-row type="flex" justify="space-between" align="middle">
            <el-col :span="4" :push="1">
                <el-row type="flex" align="middle">
                    <img src="../../assets/images/Dionysus.svg" class="logo-image" />
                    <h2 class="logo-name">Dionysus</h2>
                </el-row>
            </el-col>
            <el-col :span="12" :pull="1">
                <el-row type="flex" justify="end">
                    <div class="menu">
                        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                            <el-menu-item index="1">首页</el-menu-item>
                            <el-submenu index="2">
                                <template slot="title">分类查看</template>
                                <el-menu-item index="2-1">C++</el-menu-item>
                                <el-menu-item index="2-2">Linux</el-menu-item>
                                <el-menu-item index="2-3">Go</el-menu-item>
                                <el-submenu index="2-4">
                                    <template slot="title">Python</template>
                                    <el-menu-item index="2-4-1">爬虫</el-menu-item>
                                    <el-menu-item index="2-4-2">机器学习</el-menu-item>
                                    <el-menu-item index="2-4-3">Flask</el-menu-item>
                                </el-submenu>
                            </el-submenu>
                            <el-menu-item index="3">关于我</el-menu-item>
                        </el-menu>
                    </div>
                </el-row>

            </el-col>

        </el-row>
    </div>
</template>

<script>
export default {
  name: "HeaderNav"
};
</script>

<style>
.logo-name {
  /* height: 30px;
  widows: 30px;
  padding-left: 20px; */
  padding-left: 10px;
}
.logo-image {
  height: 30px;
  widows: 30px;
  /* padding-left: 20px; */
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.header-nav {
    /* border-bottom: 2px solid gray; */
}
</style>


