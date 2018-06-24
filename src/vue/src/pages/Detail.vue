<template>
    <div id="detail-container">
        <el-row>
            <el-col :span="18">
                <ArticleDetail></ArticleDetail>
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
    }
};
</script>