// files : Create, open, and read from a text file: Text content of an app that won the Best Campus Cup in 2021, its developer, category, and institution represented.

const fs = require('fs');

let data = "Best Campus Cup Solution 2021 winner: UniWise. Developer: OGO Studios. Category:Best Campus Cup Solution. Institution represented: University of Johanesburg";

fs.writeFile('file.txt', data, (err) => {
  if (err) throw err;
  else{
    console.log("file is updated with the given data")
  }
});

// read

fs.readFile('file.txt', (err, data) => {
  console.log("read: " + data.toString());
});