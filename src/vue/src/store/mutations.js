import {
    INIT_ARTICLES,
    ADD_ARTICLE,
    DELETE_ARTICLE,
    UPDATE_ARTICLE
} from './mutation-types'

export default {
    // 初始化文章列表
    [INIT_ARTICLES](state, articles) {
        state.articles = articles
    },

    // 新增文章
    [ADD_ARTICLE](state, article) {
        console.log(JSON.stringify(article))
        // 注：服务器交互，添加成功后返回文章ID
        state.articles.unshift(article)
    },

    // 删除文章
    [DELETE_ARTICLE](state, article) {
        state.articles.splice(state.articles.indexOf(article), 1)
    },

    // 更新文章
    [UPDATE_ARTICLE](state, article) {
        state.articles.splice(state.articles.indexOf(article.oldArticle), 1, article.newArticle)
    }
}