const { expect } = require('chai');
const sinon = require('sinon');
const fs = require('fs');
const ArticleRepository = require('../../repositories/articleRepository');

describe('ArticleRepository', () => {
  let articleRepository;
  let fsReadFileSyncStub;
  let fsWriteFileSyncStub;

  beforeEach(() => {
    articleRepository = new ArticleRepository();
    fsReadFileSyncStub = sinon.stub(fs, 'readFileSync');
    fsWriteFileSyncStub = sinon.stub(fs, 'writeFileSync');
  });

  afterEach(() => {
    sinon.restore();
  });

  // TODO: Write test cases for getAllArticles method

  // TODO: Write test cases for getArticleById method

  // TODO: Write test cases for createArticle method

  // TODO: Write test cases for updateArticle method

  //TODO: Write test cases for deleteArticle method
});
