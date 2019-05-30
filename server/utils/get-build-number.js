const fs = require('fs');

let buildNumber;

if (process.env.NODE_ENV !== 'production') {
  buildNumber = 'development';
}

const readBuildNumber = () =>
  new Promise((resolve, reject) => {
    fs.readFile('build-number.txt', (err, data) => {
      err ? reject(err) : resolve(data.toString());
    });
  });

const getBuildNumber = async () => {
  if (buildNumber) return buildNumber;

  buildNumber = await readBuildNumber();
  return buildNumber;
};

module.exports = getBuildNumber;
