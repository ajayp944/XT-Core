// synch api
// Paused mode flow

const fs = require('fs');
const stream = fs.createReadStream('./stream.js', 'UTF8');

// stream.pause()-> flowing mode to paused mode
// stream.resume()->paused mode to flowing mode

stream.on('data', function (chunk) {
    console.log(`Received a chunk with bytes ${chunk.length} and ${chunk}`)
    stream.pause();
    console.log('Reading paused for 5 second');
})

let id=setInterval(() => {
    console.log('starting data reading again')
    stream.resume();
}, 5000);
stream.on('error', (error) => {
    console.log('something went wroung');

})

stream.on('end', () => {
    console.log('no more reading')
    clearInterval(id);
})
stream.on('close', () => {
    console.log('closed file closed')
})
console.log("Ankur");