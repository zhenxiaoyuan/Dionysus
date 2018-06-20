<template>
    <div>
        <el-row>
            <el-col :span="2">
                <div class="grid-content"></div>
            </el-col>
            <el-col :span="20">
                <el-container>
                    <el-header height=" ">
                        <HeaderNav></HeaderNav>
                    </el-header>

                    <el-main class="main">
                        <ArticleCatalog></ArticleCatalog>
                    </el-main>

                    <el-footer class="footer">Footer</el-footer>
                </el-container>

            </el-col>
            <el-col :span="2">
                <div class="grid-content"></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import HeaderNav from "./HeaderNav";
import ArticleCatalog from "./ArticleCatalog";

export default {
  name: "Layout",
  components: {
    HeaderNav,
    ArticleCatalog
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
  /* border-radius: 4px; */
  min-height: 36px;
}
.main {
  /* height: 600px; */
  background-color: white;
}

.footer {
  height: 60px;
  width: 100%;
  background-color: #cccccc;
}

.el-header {
  background-color: white;
  border-bottom: 2px solid #cccccc;
}
</style>


