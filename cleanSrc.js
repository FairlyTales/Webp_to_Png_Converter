// imports
const fs = require('fs');
const path = require('path');

// get filepath to src folder
const srcFolder = path.join(__dirname, '/src/');

// read files in the src folder
fs.readdir(srcFolder, (err, files) => {
  if (err) throw err;

  // file counter
  let i = 0;

  // read all files in the src folder
  files.forEach((file) => {
    // don't do anything to the .gitignore file in the 'src' folder
    if (file !== '.gitignore') {
      // get full file path to src and export folders
      const srcFilePath = path.join(srcFolder, file);

      // delete file
      fs.unlink(srcFilePath, (err) => {
        if (err) throw err;
      })

      // update the counter and log the deleted file
      i++;
      console.log(file, ' deleted');
    }
  })

  // log the number of deleted files
  console.log(`\nDeleted ${i} images from the '/src' folder. \nCheck the '/exported' folder to see the converted images.`);
})