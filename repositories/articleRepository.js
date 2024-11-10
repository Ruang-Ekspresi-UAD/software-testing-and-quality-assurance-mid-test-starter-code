const fs = require('fs');
const path = require('path');
const articlesFilePath = path.join(__dirname, '../data/articles.json');

class ArticleRepository {
    getAllArticles() {
        // TODO: Read articles from the JSON file and return as a parsed object
        throw new Error("getAllArticles method not implemented");
    }

    getArticleById(id) {
        // TODO: Retrieve all articles and find the article with the matching ID
        throw new Error("getArticleById method not implemented");
    }

    createArticle(article) {
        // TODO: Generate a unique ID if not provided
        // TODO: Retrieve all articles, add the new article, and save the updated list back to the JSON file
        throw new Error("createArticle method not implemented");
    }

    updateArticle(id, updatedArticle) {
        let articles = this.getAllArticles();
        const index = articles.findIndex(article => article.id === id);
        if (index !== -1) {
            articles[index] = { ...articles[index], ...updatedArticle };
            fs.writeFileSync(articlesFilePath, JSON.stringify(articles, null, 2));
            return articles[index];
        }
        return null;
    }

    deleteArticle(id) {
        // TODO: Retrieve all articles, find the article by ID, and remove it from the list
        // TODO: Save the updated list back to the JSON file if the article is found
        throw new Error("deleteArticle method not implemented");
    }
}

module.exports = ArticleRepository;
