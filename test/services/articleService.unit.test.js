const { expect } = require('chai');
const sinon = require('sinon');
const ArticleService = require('../../services/articleService');
const ArticleRepository = require('../../repositories/articleRepository');

describe('ArticleService', () => {
    let articleService;
    let articleRepositoryMock;

    beforeEach(() => {
        // TODO: Create a stub instance for ArticleRepository
        // TODO: Initialize articleService with the mock repository
    });

    describe('getAllArticles', () => {
        it('should return all articles', () => {
            const mockArticles = [{ id: '1', title: 'Article 1' }];
            articleRepositoryMock.getAllArticles.returns(mockArticles);

            const articles = articleService.getAllArticles();

            expect(articles).to.deep.equal(mockArticles);
            sinon.assert.calledOnce(articleRepositoryMock.getAllArticles);
        });
    });

    // TODO: Write test cases for getAllArticles
    //  - Should return an array of articles
    //  - Should call articleRepository.getAllArticles once

    // TODO: Write test cases for getArticleById
    //  - Should return the article with the given id when it exists
    //  - Should call articleRepository.getArticleById once with the correct id
    //  - Should return null when no article is found with the given id

    // TODO: Write test cases for createArticle
    //  - Should create a new article and return it
    //  - Should call articleRepository.createArticle once with the correct article data

    // TODO: Write test cases for updateArticle
    //  - Should update an existing article and return it
    //  - Should call articleRepository.updateArticle once with the correct id and updated data
    //  - Should return null if the article is not found

    // TODO: Write test cases for deleteArticle
    //  - Should delete an article and return it
    //  - Should call articleRepository.deleteArticle once with the correct id
    //  - Should return null if the article is not found
});
