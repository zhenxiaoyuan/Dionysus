<template>
  <div id="index-container">
    <el-row>
      <el-col :span="18">
        <ArticleCatalog></ArticleCatalog>
      </el-col>
      <el-col :span="6" style="backgroundColor: #cccccc; height: 1000px">
        Quibusdam veniam maxime aliquid voluptas labore et quia commodi ipsa. Quia quia illum saepe perspiciatis voluptatum. Et impedit distinctio dolores accusantium libero aut ex.
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ArticleCatalog from "../components/index/ArticleCatalog";

export default {
  name: "Index",
  components: {
    ArticleCatalog
  }
};
</script>

<style>
</style>
