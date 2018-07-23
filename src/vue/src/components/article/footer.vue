<template>
    <div id="article-footer">
        <el-row type="flex" justify="center" align="middle">
            <router-link :to="'/detail/' + id">
                <el-button>阅读全文</el-button>
            </router-link>
        </el-row>

        <div class="article-info">
            <i class="el-icon-time" />&nbsp;{{time}}&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="el-icon-view" />&nbsp;{{readcount}}&nbsp;&nbsp;&nbsp;&nbsp;
            <i class="el-icon-menu" />&nbsp;{{classify}}
        </div>
    </div>
</template>

<script>
export default {
  // props: 传入文章时间，阅读量，文章标签
  props: ['id', 'time', 'readcount', 'classify']
  
}
</script>

<style>
.article-info {
    padding: 20px 20px 0px 20px;
}
</style>


