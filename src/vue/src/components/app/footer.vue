<template>
    <el-row type="flex" justify="center" align="middle" class="footer">
        <span class="footer-app-name">{{appName}}.top</span>
    </el-row>
</template>

<script>
export default {
  props: ['appName']
}
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


