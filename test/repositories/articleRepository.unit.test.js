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

  // TODO: Write test cases for getAllArticles
  //  - Should return an array of articles read from the file
  //  - Should call fs.readFileSync once with the correct file path

  // TODO: Write test cases for getArticleById
  //  - Should return the article with the given id when it exists
  //  - Should return null when no article is found with the given id

  // TODO: Write test cases for createArticle
  //  - Should add a new article with a generated id to the articles array
  //  - Should call fs.writeFileSync to save the updated articles array to the file
  //  - Should return the newly created article object

  describe('updateArticle', () => {
    it('should update an existing article', () => {
      const mockArticles = [{ id: '1', title: 'Article 1' }];
      fsReadFileSyncStub.returns(JSON.stringify(mockArticles));

      const updatedArticle = articleRepository.updateArticle('1', { title: 'Updated Article' });

      expect(updatedArticle.title).to.equal('Updated Article');
      sinon.assert.calledOnce(fsWriteFileSyncStub);
    });

    it('should return null if the article is not found', () => {
      const mockArticles = [{ id: '1', title: 'Article 1' }];
      fsReadFileSyncStub.returns(JSON.stringify(mockArticles));

      const updatedArticle = articleRepository.updateArticle('999', { title: 'Non-existing Article' });

      expect(updatedArticle).to.be.null;
    });
  });

  // TODO: Write test cases for deleteArticle
  //  - Should delete the article with the given id from the articles array
  //  - Should call fs.writeFileSync to save the updated articles array to the file
  //  - Should return the deleted article object
  //  - Should return null if the article with the given id is not found
});
