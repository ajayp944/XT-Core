// synch api


const fs = require('fs');
const stream = fs.createReadStream('./stream.js', 'UTF8');
stream.on('data',function(chunk){
    console.log(`Received a chunk with bytes ${chunk.length} and ${chunk}`)
})
stream.on('error',(error)=>{
console.log('something went wroung');

})

stream.on('end',()=>{
    console.log('no more reading')
})
stream.on('close',()=>{
    console.log('closed file closed')
})
console.log("Ankur");