/// Readable event

const fs = require('fs');
const stream = fs.createReadStream('./stream.js', 'UTF8');
stream.on('readable',()=>{
    let chunk;
    while(null !== (chunk = stream.read())){
        console.log(`Received ${chunk.lenght} of data`)
    }
})
