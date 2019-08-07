/**
 * Argument 1 is the source folder
 * Argument 2 is the destination scss file and path.
 * 
 * This will recursively find all the scss files in the source folders, and add them as imports to the destination file.
 */

const fs = require('fs-extra');
const utility = require('./utility');

const commonPath = 'projects/frl-common/src/lib';
const source = process.argv[2] || `${commonPath}/components`;
const output = process.argv[3] || `${commonPath}/styles/components.scss`;

const styleFiles = utility.findFiles(source, '.*.scss$');
const comment = '// This file is generated dynamically. Use "npm run update-styles" to generate it.\n\r\n\r';
let styleSheet = comment + styleFiles.map(fileName => `@import '${fileName}';`).join('\r\n');

fs.writeFileSync(output, styleSheet);

console.log('Style sheets updated.');
