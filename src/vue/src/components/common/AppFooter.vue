<template>
    <div id="app-footer">
        <el-row type="flex" justify="center" align="middle" class="footer">
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
.footer {
    height: 60px;
}
.footer-app-name {
  font-size: 20px;
  color: white;
}
</style>


