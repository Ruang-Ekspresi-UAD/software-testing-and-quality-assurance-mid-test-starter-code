const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const ArticleRepository = require('../../repositories/articleRepository');

describe('ArticleRepository', () => {
  let articleRepository;
  let fsReadFileSyncStub;
  let fsWriteFileSyncStub;

  beforeEach(() => {
    // TODO: Initialize the ArticleRepository and mock fs functions
  });

  afterEach(() => {
    sinon.restore();
  });

  describe('getAllArticles', () => {
    it('should return all articles', () => {
      // TODO: Stub fs.readFileSync to return mock articles

      // TODO: Call the method and check if the returned articles match the mock articles
      const articles = articleRepository.getAllArticles();

      // TODO: Add assertion to ensure the result is correct
    });
  });

  describe('getArticleById', () => {
    it('should return the article with the given id', () => {
      // TODO: Stub fs.readFileSync to return mock articles

      // TODO: Call getArticleById and check if the correct article is returned for id '1'
      const article = articleRepository.getArticleById('1');

      // TODO: Add assertion to ensure the correct article is returned
    });

    it('should return null if no article is found', () => {
      // TODO: Stub fs.readFileSync to return mock articles

      // TODO: Call getArticleById with a non-existing id and assert that it returns null
    });
  });

  describe('createArticle', () => {
    it('should add a new article and save to the file', () => {
      const mockArticle = { title: 'New Article' };
      // TODO: Stub fs.readFileSync to return initial articles

      // TODO: Call createArticle and verify that the new article is returned with an id

      // TODO: Ensure writeFileSync is called to save the new article
    });
  });

  describe('updateArticle', () => {
    it('should update an existing article', () => {
      // TODO: Stub fs.readFileSync to return mock articles

      // TODO: Call updateArticle and verify that the title of the article is updated
    });

    it('should return null if the article is not found', () => {
      // TODO: Stub fs.readFileSync to return mock articles

      // TODO: Call updateArticle with a non-existing article id and ensure it returns null
    });
  });

  describe('deleteArticle', () => {
    it('should delete an article and return the deleted article', () => {
      // TODO: Stub fs.readFileSync to return mock articles

      // TODO: Call deleteArticle and ensure that the correct article is deleted
    });

    it('should return null if the article is not found', () => {
      // TODO: Stub fs.readFileSync to return mock articles

      // TODO: Call deleteArticle with a non-existing article id and assert that it returns null
    });
  });
});
