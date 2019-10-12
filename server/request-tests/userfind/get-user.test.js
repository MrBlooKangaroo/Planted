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
    luxLevel: 'HIGH',
}

const nookDataTwo = {
    name: 'spotTwo',
    luxLevel: 'LOW',
}

afterEach(cleanUpDb);
afterAll(closeDbConnection);

describe('get a specific user data', () => {
    const query = createQuery(__dirname);

    it('returns data for the specified user', async () => {
        const { testClient } = await createTestClient();
        const userOne = await db.user.create({ ...userDatum });

        const nookOne = await db.nook.create({ ...nookDataOne, userId: userOne.id })
        const nookTwo = await db.nook.create({ ...nookDataTwo, userId: userOne.id })
    
        const variables = { id: userOne.id };
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
});