// imports
const fs = require('fs');
const path = require('path');
const webpConverter = require('webp-converter');

// this will grant 755 permission to webp executables to prevent access errors
webpConverter.grant_permission();

// get filepath to src and export folders
const srcFolder = path.join(__dirname, '/webp/');
const expFolder = path.join(__dirname, '/exported/');

// read all files in the src folder
fs.readdir(srcFolder, (err, files) => {
  if (err) throw err;

  // file counter
  let i = 0;

  // convert all files to png
  files.forEach((file) => {
    // don't do anything to the .gitignore file in the 'src' folder
    if (file !== '.gitignore') {
      // get full file path to src and export folders
      const srcFilePath = path.join(srcFolder, file);
      const expFilePath = path.join(expFolder, file);

      // remove '.webp' from the end of the filepath and add '.png'
      const expFileNewExt = expFilePath.substr(0, expFilePath.lastIndexOf(".")) + ".png";

      // convert file to png
      webpConverter.dwebp(srcFilePath, expFileNewExt, "-o");

      // update the counter and log the converted file
      i++;
      console.log(file, ' converted');
    }
  })

  // log the number of converted files
  console.log(`\nConverted ${i} images. \nCheck the '/exported' folder to see the result.`);
})


