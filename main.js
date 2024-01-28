const fs = require("fs");
const path = require("path");

const fileList = (directory, extension) => {
  //create a path to the directory
  const directoryPath = path.join(__dirname, directory);
  // Read the contents of the directory
  fs.readdir(directoryPath, (err, lists) => {
    if (err) {
      return console.log("Sorry, cannot read the directory!?");
    }

    // filter the list of files in the directory to only files that end with what user inputs eg: .txt, js, etc
    const filterFiles = lists.filter(
      (list) => path.extname(list).slice(1) === extension
    );

    // Print the list of filtered files on separate lines
    filterFiles.forEach((list) => {
      console.log(list);
    });
  });
};

const directory = process.argv[2];
const extension = process.argv[3];
fileList(directory, extension);
