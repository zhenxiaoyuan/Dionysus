<template>
    <div id="index-page">
        <el-row>
            <el-col :span="18">
                <ArticleCatalog></ArticleCatalog>
            </el-col>
            <el-col :span="6">
                <AppAside></AppAside>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import ArticleCatalog from "@/components/index/ArticleCatalog";
import AppAside from "@/components/common/AppAside";

export default {
  name: "Index",
  components: {
    ArticleCatalog,
    AppAside
  }
};
</script>

<style>

</style>
