
const fs = require('file-system');
const data = {
    serviceName: 'serviceName', 
    token: 'token'
  }

const path = '../data/data.json';
fs.writeFile(path, data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});