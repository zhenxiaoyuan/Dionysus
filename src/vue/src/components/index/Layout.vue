<template>
    <div>
        <el-row>
            <el-col :span="4">
                <div class="grid-content"></div>
            </el-col>
            <el-col :span="16">
                <div class="grid-content bg-purple-light">
                    <HeaderNav></HeaderNav>

                    <el-main class="main">Main</el-main>

                    <el-footer class="footer">Footer</el-footer>
                </div>
            </el-col>
            <el-col :span="4">
                <div class="grid-content"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import HeaderNav from './HeaderNav';

export default {
  name: "Layout",
  components: {
    HeaderNav
  }
};
</script>

<style>
.el-row {
  margin-bottom: 0px;
  /* &:last-child {
    margin-bottom: 0;
  } */
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.main {
  height: 1000px;
  background-color: #d3dce6;
}

.footer {
  height: 60px;
  width: 100%;
  background-color: #cccccc;
}
</style>


