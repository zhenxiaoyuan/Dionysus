<template>
    <div id="article-footer">
        <el-row type="flex" justify="center" align="middle">
            <router-link to="/detail">
                <el-button>阅读全文</el-button>
            </router-link>
        </el-row>

        <div class="article-info">
            <i class="el-icon-time" />&nbsp;{{time}}&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="el-icon-view" />&nbsp;{{readCount}}&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="el-icon-menu" />&nbsp;{{category}}
        </div>
    </div>
</template>

<script>
export default {
  name: "ArticleFooter",
  data: function() {
    return {
      time: "Sun Feb 18 2018 05:22:33",
      readCount: "54526",
      category: "est"
    };
  }
  // props: 传入文章时间，阅读量，文章标签
};
</script>

<style>
.article-info {
    padding: 20px 20px 0px 20px;
}
</style>


