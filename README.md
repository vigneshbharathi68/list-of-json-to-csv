# list-of-json-to-csv
Convert the list of json objects into csv

## Usage
```
const { writeToCSV } = require('list-of-json-to-csv')
// Data to convert
const data = [
    {name: "Vignesh", age: 20},
    {name: "John", age: 28}
]
// File path which you want to export
const file = './export.csv'

// Sperater you want to export as ',' or '|'
const seperator = ','

writeToCSV(data, file, seperator)
```
This function will export the given data into csv file
##### Sample Output from the above usage
export.csv will create as shown below:
```
name, age
Vignesh, 20
John, 28
```