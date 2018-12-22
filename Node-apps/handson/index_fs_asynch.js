// Non Streaming api

const fs = require('fs');

// Non Blocking api(Asynch)

const option = {
    encoding: 'UTF8'
}
const callback = (err,data) =>{
    if(err) throw err;
    console.log(data);
}
console.log('reading stared.......');
fs.readFile('/Users/ankurgupta/Desktop/ankur.txt', option, callback);
console.log('reading end........');


// write operation
const data = 'This is asynch write opertion';
console.log('Writting stared.......');
fs.writeFile('/Users/ankurgupta/Desktop/gupta.txt',data,option,callback);
console.log('Writting end........');
