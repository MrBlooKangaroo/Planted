const db = require('../../models');
const server = require('../../config/server');
const { createTestClient } = require('apollo-server-testing');

module.exports = async currentUserData => {
  const currentUser = currentUserData && (await db.user.create(currentUserData));

  server.context = () => ({ currentUser });

  return {
    currentUser,
    testClient: createTestClient(server),
  };
};
