const http = require('http');
const fs = require('fs');

const Application = function (request, response) {
    const stream = fs.createReadStream('./stream.js');
    response.writeHead(200, {
        'Content-type': 'text/plain'
    })
    stream.pipe(response);
}


const server = http.createServer(Application);
server.on('request', function (req, res) {
    console.log(new Date());
})
server.listen(8080, () => { console.log('server ready') })

// USe Case 
