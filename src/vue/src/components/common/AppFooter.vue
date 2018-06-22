<template>
    <div id="app-footer">
        <el-row type="flex" justify="center" align="middle">
            <span class="footer-app-name">{{appName}}.top</span>
        </el-row>
    </div>
</template>

<script>
export default {
    name: "AppFooter",
    props: ['appName']
};
</script>

<style>
.el-row {
    height: 60px;
}
.footer-app-name {
  font-size: 20px;
}
</style>


