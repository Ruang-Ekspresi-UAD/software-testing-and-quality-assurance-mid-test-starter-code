const fs = require('fs');
const path = require('path');
const articlesFilePath = path.join(__dirname, '../data/articles.json');

class ArticleRepository {
    getAllArticles() {
        const data = fs.readFileSync(articlesFilePath);
        return JSON.parse(data);
    }

    getArticleById(id) {
        const articles = this.getAllArticles();
        const article = articles.find(article => article.id === id);
        return article || null;
    }

    createArticle(article) {
        // Ensure the article has an ID before adding it to the list
        if (!article.id) {
            article.id = Date.now().toString(); // Assign a unique ID if not already set
        }
        const articles = this.getAllArticles();
        articles.push(article);
        fs.writeFileSync(articlesFilePath, JSON.stringify(articles, null, 2));
        return article;
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
        let articles = this.getAllArticles();
        const index = articles.findIndex(article => article.id === id);
        if (index !== -1) {
            const deletedArticle = articles.splice(index, 1);
            fs.writeFileSync(articlesFilePath, JSON.stringify(articles, null, 2));
            return deletedArticle[0];
        }
        return null;
    }
}

module.exports = ArticleRepository;
