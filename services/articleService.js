class ArticleService {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }

    getAllArticles() {
        // TODO: Fetch all articles from the repository and return them
        
        throw new Error("getAllArticles method not implemented");
    }

    getArticleById(id) {
        // TODO: Fetch a single article by ID from the repository
        
        throw new Error("getArticleById method not implemented");
    }

    createArticle(article) {
        // TODO: Set a unique ID for the article, for example: article.id = Date.now().toString();
        // Then save it in the repository
        
        throw new Error("createArticle method not implemented");
    }

    updateArticle(id, updatedArticle) {
        // Leave this method complete for students to use as a reference
        return this.articleRepository.updateArticle(id, updatedArticle);
    }

    deleteArticle(id) {
        // TODO: Delete an article by ID from the repository
        
        throw new Error("deleteArticle method not implemented");
    }
}

module.exports = ArticleService;
