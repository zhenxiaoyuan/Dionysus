<template>
    <div id="article-footer">
        <router-link to="/detail">
            <el-button>阅读全文</el-button>
        </router-link>
        <br /> 发表时间：{{time}}&emsp;阅读量：{{readCount}}&emsp;文章标签：{{category}}
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

