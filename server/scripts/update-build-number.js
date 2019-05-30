const fs = require('fs');

const updateBuildNumber = () => {
  const rev = fs.readFileSync('../.git/HEAD').toString();
  if (!fs.existsSync('build-number.txt')) {
    return console.error('build-number.txt does not exist');
  }
  const buildNumber = fs.readFileSync('build-number.txt').toString();
  if (rev.indexOf(':') === -1) {
    return console.log('Could not parse git sha');
  } else {
    const branchPath = rev.substring(5).trim();
    const sha = fs.readFileSync(`../.git/${branchPath}`).toString();
    const buildNumberCounter = parseInt(buildNumber.substring(0, 1));
    return fs.writeFileSync(
      'build-number.txt',
      `${buildNumberCounter + 1}-${sha}`,
    );
  }
};

updateBuildNumber();
