const request = require('supertest');
const app = require('../../app');
const fs = require('fs');
const path = require('path');

const articlesFilePath = path.join(__dirname, '../../data/articles.json');

describe('TODO: Article API Integration Tests', () => {
  beforeEach(() => {
    const initialData = [{ id: '1', title: 'Test Article 1' }];
    fs.writeFileSync(articlesFilePath, JSON.stringify(initialData, null, 2));
  });

  describe('TODO: GET /api/articles', () => {
    it('TODO: should return all articles', async () => {
      // TODO: Make a GET request to /api/articles and store the response

      // TODO: Add assertions to check the response status and body
      
    });
  });

  describe('TODO: GET /api/articles/:id', () => {
    it('TODO: should return the article with the given id', async () => {
      // TODO: Make a GET request to /api/articles/1 and store the response

      // TODO: Add assertions to check for the response status and the body
    
    });

    it('TODO: should return 404 if article not found', async () => {
      
      const response = await request(app).get('/api/articles/999');

      // TODO: Add assertions to check for 404 status and appropriate error message
      
    });
  });

  describe('TODO: POST /api/articles', () => {
    it('TODO: should create a new article', async () => {
      const newArticle = { title: 'New Article' };

      // TODO: Make a POST request to /api/articles with newArticle data
     

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('id');
      expect(response.body.title).toBe('New Article');

      // TODO: Verify that the article is saved in the file
      const articles = JSON.parse(fs.readFileSync(articlesFilePath));
      
    });
  });

  describe('TODO: PUT /api/articles/:id', () => {
    it('TODO: should update an existing article', async () => {
      const updatedArticle = { title: 'Updated Article 1' };

      // TODO: Make a PUT request to /api/articles/1 with updatedArticle data
      const response = await request(app)
        .put('/api/articles/1')
        .send(updatedArticle);

      // TODO: Add assertions to check for the updated article and status code
      
      // TODO: Verify that the article is updated in the file
      const articles = JSON.parse(fs.readFileSync(articlesFilePath));
     
    });

    it('TODO: should return 404 if article not found', async () => {
      const updatedArticle = { title: 'Non-existent Article' };

      // TODO: Make a PUT request to /api/articles/999 with updatedArticle data

      // TODO: Add assertions to check for a 404 status and error message
     
    });
  });

  describe('TODO: DELETE /api/articles/:id', () => {
    it('TODO: should delete an article', async () => {
      // TODO: Make a DELETE request to /api/articles/1 and store the response
      const response = await request(app).delete('/api/articles/1');

      // TODO: Add assertions to check for the deleted article and correct status

      // TODO: Verify that the article is deleted from the file
     
      expect(articles).toHaveLength(0);
    });

    it('TODO: should return 404 if article not found', async () => {
      // TODO: Make a DELETE request to /api/articles/999 and store the response
    
      // TODO: Add assertions to check for 404 status and error message
      
    });
  });
});
