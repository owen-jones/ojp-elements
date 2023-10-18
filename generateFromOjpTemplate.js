const fs = require('fs');
const fsp = fs.promises;
const path = require('path');
const replace = require('replace-in-file');
const cheerio = require('cheerio');


let componentNameKebab = process.argv[2];

validateComponentName(componentNameKebab);

// Define source and target paths
let sourcePaths = [
  'src/components/ojp-template/ojp-template.jsx',
  'src/components/ojp-template/ojp-template.scss',
  'src/pages/ojp-template/index.html',
  'src/global/components/_ojp-template.scss',
];

let targetPaths = [
  `src/components/${componentNameKebab}/${componentNameKebab}.jsx`,
  `src/components/${componentNameKebab}/${componentNameKebab}.scss`,
  `src/pages/${componentNameKebab}/index.html`,
  `src/global/components/_${componentNameKebab}.scss`
];

let indexPagePath = 'src/index.html';

Promise.all(sourcePaths.map((sourcePath, i) => {
  // let sourcePath = sourcePaths[i];
  let targetPath = targetPaths[i];
  let targetDir = path.dirname(targetPath);

  return createDirectory(targetDir)
    .then(() => copyFile(sourcePath, targetPath))
    .then(() => replaceInFile(targetPath, componentNameKebab))
    .then(() => {
      console.log('Component ' + componentNameKebab + ' generated successfully.');
    })
    .catch(err => {
      console.error('Error occurred generating ' + componentNameKebab +':', err);
    });
}))
  .then((indexPage) => addComponentToIndexPage(indexPage))
  .then(() => {
    console.log('Component added to index page `' + indexPagePath + '`');
  })
  .catch(err => {
    console.error('Error occurred:', err);
  });

process.on('unhandledRejection', error => {
  console.error('Unhandled error:', error);
});


function addComponentToIndexPage(data){
  return fsp.readFile(indexPagePath, 'utf8').then(
    data => {
      const $ = cheerio.load(data);
      $('ul').append(`<li><a href='pages/${componentNameKebab}/index.html'>${componentNameKebab}</a></li>`);
      return fsp.writeFile(indexPagePath, $.html());
    }
  )
}

function validateComponentName(componentNameKebab) {
  if (!componentNameKebab) {
    console.log('No component name provided. Use: npm run create [component-name]');
    process.exit();
  }

  if (!componentNameKebab.includes('-')) {
    console.log('Component name must include at least one dash. Use: npm run create [component-name]');
    process.exit();
  }

  if (componentNameKebab !== componentNameKebab.toLowerCase()) {
    console.log('Component name must be all lower case. Use: npm run create [component-name]');
    process.exit();
  }
}

function createDirectory(targetDir) {
  return fsp.access(targetDir)
    .catch(() => {
      console.log('Creating directory: ' + targetDir);
      return fsp.mkdir(targetDir);
    });
}

function copyFile(sourcePath, targetPath) {
  console.log('Copying file: ' + sourcePath + ' to ' + targetPath);
  return fsp.copyFile(sourcePath, targetPath);
}

function replaceInFile(targetPath, componentNameKebab) {
  let componentNameTitleCase =
      componentNameKebab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  let componentNameCamelCase =
      componentNameKebab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  let replaceOptions = {
    files: targetPath,
    from: [
      /ojp-template/g,
      /Ojp Template/g,
      /OjpTemplate/g
    ],
    to: [
      componentNameKebab,
      componentNameTitleCase,
      componentNameCamelCase
    ]
  };
  // console.log('Replacing in file: ' + targetPath + ' with options: ' + JSON.stringify(replaceOptions));

  return replace(replaceOptions);
}
