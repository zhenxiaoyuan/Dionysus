<template>
    <div class="header-nav">
        <!-- <img src="./../../assets/images/Dionysus.svg" class="logo float-left" /> -->
        <!-- <div class="float-right"> -->
        <!-- <el-button type="text" size="small">文字按钮</el-button>
                <el-button type="text" size="small">文字按钮</el-button>
                <el-button type="text" size="small">文字按钮</el-button>
                <el-button type="text" size="small">文字按钮</el-button> -->
        <el-row align="middle">
            <el-col :span="12">Logo</el-col>
            <el-col :span="12">
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
            </el-col>

        </el-row>

        <!-- </div> -->
    </div>
</template>

<script>
export default {
  name: "HeaderNav"
};
</script>

<style>
.logo {
  height: 30px;
  widows: 30px;
  padding-left: 20px;
}
</style>


