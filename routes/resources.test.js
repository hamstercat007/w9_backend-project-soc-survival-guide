const app = require("../app")
const request = require('supertest');
const pool = require("../db/index.js")


describe('GET /api/v1/resources tests', function() {

    it('responds with json', async function() {
      await new Promise((resolve) => setTimeout(() => resolve(), 2000)); //Solution came from: https://stackoverflow.com/questions/69976411/jest-tlswrap-open-handle-error-using-simple-node-postgres-pool-query-fixed-wit
      const response = await request(app)
        .get('/api/v1/resources')
        .set('Accept', 'application/json')
        // console.log(response.headers)
      expect(response.headers["content-type"]).toMatch(/json/);
      expect(response.status).toEqual(200);
    });
  
  it.only('response with success: true and payload: array', async function() {
    await new Promise((resolve) => setTimeout(() => resolve(), 2000));
    const response = await request(app)
    .get('/api/v1/resources')
    .set('Accept', 'application/json')
    //console.log(response.body);
    expect(response.body).toStrictEqual(expect.objectContaining({
      'success': expect.any(Boolean),
      'payload': expect.any(Array),
    
    }));
  } )
  
});


 afterAll( async () => {
    await pool.end();
});

