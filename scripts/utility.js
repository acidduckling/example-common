const fs = require('fs-extra');

function findFiles(basePath, match) {
  const matches = [];
  const pattern = new RegExp(match);

  recurse(basePath);
  return matches;

  function recurse(parentDir) {
    const files = fs.readdirSync(parentDir);
    files.forEach(fileName => {
      const fullPath = `${parentDir}/${fileName}`;
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        return recurse(fullPath);
      }
      if (pattern.test(fileName)) {
        matches.push(fullPath);
      }
    });
  }
}

module.exports = {
  findFiles,
};
