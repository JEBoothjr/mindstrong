const fs = require('fs');
let data = fs.readFileSync('records.txt', 'utf8');
let result = [];
data = data.split(/\r?\n{5}/).forEach(record =>  {
  let parsedLine =  record.split(/\r?\n{+}/);
  let newRecord = {
    description: parsedLine[0]
  }
  result.push(newRecord);
});
fs.writeFileSync('./records.json', JSON.stringify(result, null, 2), 'utf8');
