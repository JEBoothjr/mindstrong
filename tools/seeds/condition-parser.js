const fs= require('fs');
let data = fs.readFileSync('conditions.txt', 'utf8');
let result = [];
data = data.split(/\r?\n/).forEach(line =>  {
  let parsedLine =  line.split('  ');
  let condition = {
    code: parsedLine[0],
    description: parsedLine[1]
  }
  result.push(condition);
});
fs.writeFileSync('./conditions.json', JSON.stringify(result, null, 2), 'utf8');
