const { createTestClient } = require('apollo-server-testing');
const server = require('../../config/server');
const db = require('../../models');

module.exports = async currentUserData => {
  const currentUser =
    currentUserData && (await db.user.create(currentUserData));

  server.context = () => ({ currentUser });

  return {
    currentUser,
    testClient: createTestClient(server),
  };
};
