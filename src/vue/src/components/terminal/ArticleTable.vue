<template>
    <div>
        <el-table :data="articles" style="width: 100%">
            <el-table-column label="标题">
                <template slot-scope="scope">
                    <router-link :to="'/detail/' + scope.row.id">
                        <el-button type="text">
                            {{ scope.row.title }}
                        </el-button>
                    </router-link>
                </template>
            </el-table-column>
            <el-table-column prop="readcount" label="阅读量" width="120">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="200">
                <template slot-scope="scope">
                    <router-link :to="'/edit/' + scope.row.id">
                        <el-button size="mini">
                            <i class="el-icon-edit" /> 编辑
                        </el-button>
                    </router-link>
                    <el-button size="mini" type="danger" @click="prepareDelete(scope.row)">
                        <i class="el-icon-delete" /> 删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog title="提示" :visible.sync="dialogDeleteVisible" width="30%">
            <span>删除后将无法恢复，确认删除？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogDeleteVisible = false">取消</el-button>
                <el-button type="primary" @click="confirmDelete">确定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { deleteArticle } from '@/service/getData'
import { mapMutations } from 'vuex'

export default {
  props: ['articles'],

  data() {
    return {
      dialogDeleteVisible: false,
      articleWillDelete: {}
    };
  },

  methods: {
    prepareDelete(article) {
      this.articleWillDelete = article;
      this.dialogDeleteVisible = true;
    },

    confirmDelete() {
      deleteArticle({
          id: this.articleWillDelete.id
      }).then(response => {
        console.log(response.data);
        this.deleteSuccess();
        // 或失败
      });
    },

    deleteSuccess() {
      this.$message({
        message: "删除成功",
        type: "success",
        showClose: true,
        center: true
      });
      this.dialogDeleteVisible = false;
      this.DELETE_ARTICLE(this.articleWillDelete);
      // 此处肯定可以重新获取数据并刷新Table组件，现在还不会，以后优化。
      //   window.history.go(0);
    },

    ...mapMutations(['DELETE_ARTICLE'])
  }
};
</script>

