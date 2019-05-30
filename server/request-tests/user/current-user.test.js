const {
  cleanUpDb,
  closeDbConnection,
  createQuery,
  createTestClient,
} = require('../../utils/test');
const db = require('../../models');

const userDatum = {
  firstName: 'Mook',
  lastName: 'Flexer',
  email: 'mookin@mook.com',
};

afterEach(cleanUpDb);
afterAll(closeDbConnection);

describe('get user request', () => {
  const query = createQuery(__dirname);

  it('returns data for the specified user', async () => {
    const { testClient } = await createTestClient();
    const user = await db.user.create({ ...userDatum });

    const variables = { id: user.id };
    const response = await testClient.query({ query, variables });
    const responseUser = response.data.user;

    expect(response.errors).toBe(undefined);
    expect(responseUser).toBeDefined();
    expect(responseUser.firstName).toBe(userDatum.firstName);
    expect(responseUser.lastName).toBe(userDatum.lastName);
    expect(responseUser.email).toBe(userDatum.email);
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
