class ArticleService {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }

    getAllArticles() {
        return this.articleRepository.getAllArticles();
    }

    getArticleById(id) {
        return this.articleRepository.getArticleById(id);
    }

    createArticle(article) {
        // Set a unique ID (simple timestamp for demo purposes)
        article.id = Date.now().toString();
        return this.articleRepository.createArticle(article);
    }

    updateArticle(id, updatedArticle) {
        return this.articleRepository.updateArticle(id, updatedArticle);
    }

    deleteArticle(id) {
        return this.articleRepository.deleteArticle(id);
    }
}

module.exports = ArticleService;
