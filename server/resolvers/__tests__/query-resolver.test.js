const db = require('../../models');
const { 
  cleanUpDb, 
  createQuery,
  createTestClient,
  closeDbConnection, 
} = require('../../utils/test');
const { testUser } = require('../../utils/seeds/testData')

afterEach(cleanUpDb);
afterAll(closeDbConnection);

describe('Query resolver', () => {
  describe('Unit testing', () => {
    const query = createQuery(
      __dirname, 
      '../../utils/queries/user.graphql'
    );

    it('returns data for the specified user', async () => {
      const { testClient } = await createTestClient();
      const user = await db.user.create({ ...testUser });
      const variables = { id: user.id };
      const response = await testClient.query({ query, variables });
      const responseUser = response.data.user;
  
      expect(response.errors).toBe(undefined);
      expect(responseUser).toBeDefined();
      expect(responseUser.firstName).toBe(testUser.firstName);
      expect(responseUser.lastName).toBe(testUser.lastName);
      expect(responseUser.email).toBe(testUser.email);
      expect(responseUser.nickname).toBe(testUser.nickname);
    });
  
    it('should return NOT_FOUND error if invalid user id supplied', async () => {
      const { testClient } = await createTestClient();
      const variables = { id: '0b9f38f1-333f-42db-b0c7-3939cab66bc8' };
      const response = await testClient.query({ query, variables });
    
      const { errors } = response;
      
      expect(errors.length).toBe(1);
      expect(errors[0].extensions.code).toBe('NOT_FOUND');
    });
  });
});
