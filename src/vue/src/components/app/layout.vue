<template>
    <div id="app-layout">
        <el-row>
            <!-- 左侧留白 -->
            <el-col :span="2">
                <div class="blank"></div>
            </el-col>

            <!-- 中间部分 -->
            <el-col :span="20">
                <el-container>
                    <!-- 页头 -->
                    <el-header height="">
                        <app-header :app-name="appName"></app-header>
                    </el-header>

                    <el-main class="app-main">
                        <keep-alive>
                            <router-view v-if="$route.meta.keepAlive">
                                <!-- 内容区，根据路由发生改变 -->
                            </router-view>
                        </keep-alive>
                        <router-view v-if="!$route.meta.keepAlive">
                            <!-- 内容区，根据路由发生改变 -->
                        </router-view>

                    </el-main>

                    <!-- 页脚 -->
                    <el-footer height="">
                        <app-footer :app-name="appName"></app-footer>
                    </el-footer>
                </el-container>
            </el-col>

            <!-- 右侧留白 -->
            <el-col :span="2">
                <div class="blank"></div>
            </el-col>

        </el-row>
    </div>
</template>

<script>
import appHeader from './header'
import appFooter from './footer'

export default {
  components: {
    appHeader,
    appFooter
  },
  data () {
    return {
      appName: "Dionysus"   // 应用名称
    }
  }
}
</script>

<style>
#app-layout {
  background-color: #303133;
}
.blank {
  min-height: 100px;
}
.app-main {
  padding: 0px;
  min-height: 725px;
}
</style>


