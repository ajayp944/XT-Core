const fs = require('fs');
try {
    console.log('Reading started');
    const data = fs.readFileSync('/Users/ankurgupta/Desktop/ankur.txt', 'UTF8');
}
catch(error) {
    console.log('Error:' + error );
}
console.log('Reading finished');



try {
    const data = 'Gupta';
    fs.writeFileSync('/Users/ankurgupta/Desktop/ankur.txt',data,'UTF8');
}
catch(error){
    console.log(error);
}