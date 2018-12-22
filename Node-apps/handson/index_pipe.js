//pipe api 

const fs = require('fs');
const readStream = fs.createReadStream('./stream.js', 'UTF8');
const wriyeStream = fs.createWriteStream('./newStream.js', 'UTF8');
readStream.pipe(wriyeStream);




