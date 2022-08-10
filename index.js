const path = require('path');
const fs = require("fs");
const csvWriter = require("csv-write-stream");

function writeToCSV(data, fileName, delimiter) {
  // check data is dictionary or not
  if (data.constructor === Object) {
    console.log('Argument must be array of dictionary.')
    return 
  }
  // console.log('writeToCSV ===>', data)
  // check argument is empty
  if (!data) {
    console.log('Argument must not be empty');
    return;
  }
  // check argument is dictionary Object
  if (typeof data !== 'object') {
    console.log('Argument must be an object');
    return;
  }
  let writer = delimiter ? csvWriter({ seperator: delimiter }) : csvWriter();

  // check file exists or not
  console.log(fs.existsSync(fileName))

  if (fs.existsSync(fileName)) {
    fs.unlinkSync(fileName);
  } else {
    // create file in the fileName path
    fs.writeFileSync(fileName, '');
  }
  // create file
  fs.openSync(fileName, 'w');
  // write data to file
  writer.pipe(fs.createWriteStream(fileName));
  data.forEach((file) => {
    if (file) {
      // console.log(file)
      let keys = file ? Object.keys(file) : [];
      let values = file ? Object.values(file) : [];
      // Creating an object with matching two arrays
      let obj = {}
      keys.forEach((key, index) => {
        obj[key] = values[index]
      })
      writer.write(obj)

    }
  });
  console.log('Line wrote ===>', data.length)
  writer.end();
  // get the exact path of the fileName
  console.log('file written succesfully to ', fileName);
  return data.length
}

function writeToJson (filePathName, list) {
  return new Promise((resolve, reject) => {
    console.log('Start - writeToJson list.length: ', list.length, new Date())
    if (list.length > 0) {
      fs.unlink(filePathName, () => {
        for (let i = 0; i < list.length; i++) {
          fs.appendFileSync(filePathName, JSON.stringify(list[i]) + '\n')
        }
        console.log('End - writeToJson: ', new Date())
        resolve(true)
      })
    } else {
      const errMsg = 'Records are not available to write into a file. list size is 0.'
      reject(errMsg)
    }
  })
}
module.exports = { writeToCSV, writeToJson }
// module.exports = {
//   writeToCSV,
//   writeToJson
// };
// writeToCSV([{name: "Vignesh", age: "20"}], './export.csv', ',')
