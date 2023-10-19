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
    .then(() => {
      // console.log('Created file: ' + targetPath);
    })
    .catch(err => {
      console.error('Error occurred creating file ' + targetPath + ':', err);
    })
    .then(() => copyFile(sourcePath, targetPath))
    .then(() => replaceInFile(targetPath, componentNameKebab))
    .catch(err => {
      console.error('Error occurred generating ' + componentNameKebab +':', err);
    });
}))
  .then(() => console.log('Component generated successfully'))
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
  // If the component name already exists, exit
  if (fs.existsSync('src/components/' + componentNameKebab)) {
    console.log('Component already exists: ' + componentNameKebab + '. Please choose a unique component name.');
    process.exit();
  }

  if (!componentNameKebab) {
    console.log('No component name provided. Use: npm run generateFromTemplate [component-name]');
    process.exit();
  }

  if (!componentNameKebab.includes('-')) {
    console.log('Component name must include at least one dash. Use: npm run generateFromTemplate [component-name]');
    process.exit();
  }

  // If the component name includes any special characters, exit
  if (componentNameKebab.match(/[^a-zA-Z0-9-]/)) {
    console.log('Component name must include only letters, numbers, and dashes. Use: npm run generateFromTemplate [component-name]');
    process.exit();
  }


  if (componentNameKebab !== componentNameKebab.toLowerCase()) {
    console.log('Component name must be all lower case. Use: npm run generateFromTemplate [component-name]');
    process.exit();
  }
}

function createDirectory(targetDir) {
  return fsp.access(targetDir)
    .catch(() => {
      // console.log('Creating directory: ' + targetDir);
      if (!fs.existsSync(targetDir)){
        fs.mkdirSync(targetDir);
      }
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
