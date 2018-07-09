<template>
    <div id="detail-page">
        <el-row>
            <el-col :span="18">
                <ArticleDetail :id="this.$route.params.id"></ArticleDetail>
            </el-col>
            <el-col :span="6">
                <AppAside></AppAside>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import AppAside from "@/components/common/AppAside";
import ArticleDetail from "@/components/index/ArticleDetail";

export default {
    name:'Detail',
    components: {
        AppAside,
        ArticleDetail
    },
    // data() {
    //     id = this.$route.params.id
    // },
    mounted() {
        console.log(this.$route.params.id);
    }
};
</script>