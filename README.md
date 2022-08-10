# list-of-json-to-csv
Convert the list of json objects into csv

## Usage
```
const { writeToCSV, writeToJson } = require('list-of-json-to-csv')
// Data to convert
const data = [
    {name: "Vignesh", age: 20},
    {name: "John", age: 28}
]
// File path which you want to export
const csvFilePath = './export.csv'
const jsonFilePath = './export.json'

// Sperater you want to export as ',' or '|'
const seperator = ','

// It will export the list of json into the csv file
writeToCSV(data, file, seperator)
// It will export the list of json into single line json file (Like mongo import json file)
writeToJson(jsonFilePath, data)

```
This function will export the given data into csv file
##### Sample Output from the above usage
export.csv will create as shown below:
```
name, age
Vignesh, 20
John, 28
```
export.json will export as per the below content
```
{name: "Vignesh", age: 20},
{name: "John", age: 28}
```