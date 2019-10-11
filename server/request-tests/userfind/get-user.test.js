const {
    cleanUpDb,
    closeDbConnection,
    createQuery,
    createTestClient,
} = require('../../utils/test');
const db = require('../../models');

const userDatum = {
    nickname: 'Hotshot',
    firstName: 'Mook',
    lastName: 'Flexer',
    email: 'mookin@mook.com',
    city: 'boston',
};

const nookDataOne = {
    name: 'spotOne',
    luxLevel: HIGH
}

const nookDataTwo = {
    name: 'spotTwo',
    luxLevel: LOW
}

afterEach(cleanUpDb);
afterAll(closeDbConnection);

describe('get a specific user data', () => {
    const query = createQuery(__dirname);

    it('returns data for the specified user', async () => {
        const { testClient } = await createTestClient();
        const user = await db.user.create({ ...userDatum });

        const nookOne = await db.nook.create({ ...nookDataOne, userId: userDatum.id })
        const nookTwo = await db.nook.create({ ...nookDataTwo, userId: userDatum.id })
    
        const variables = { id: user.id };
        const response = await testClient.query({ query, variables });
        const responseUser = response.data.user;
    
        expect(response.errors).toBe(undefined);
        expect(responseUser).toBeDefined();
        expect(responseUser.firstName).toBe(userDatum.firstName);
        expect(responseUser.lastName).toBe(userDatum.lastName);
        expect(responseUser.email).toBe(userDatum.email);
        expect(responseUser.nickname).toBe(userDatum.nickname);
        expect(responseUser.nooks[0].name).toBe(nookDataOne.name);
        expect(responseUser.nooks[1].name).toBe(nookDataTwo.name);
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