const { gql } = require('apollo-server');
const fs = require('fs');
const path = require('path');

const createQuery = (
  dirname,
  { filePath } = { filePath: './query.graphql' },
) => {
  const resolvedPath = path.resolve(dirname, filePath);
  const queryContent = fs.readFileSync(resolvedPath);

  return gql`
    ${queryContent}
  `;
};
module.exports = createQuery;
