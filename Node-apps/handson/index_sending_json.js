const http = require('http');
const customers = [{
    id: 1,
    name: "ankur"
}, {
    id: 2,
    name: "Amit"
}
]
const Application = function (request, response) {
    const payload = JSON.stringify(customers);
    response.writeHead(200, {
        'Content-type': 'application/json'
    })
    response.write(payload);
    response.end();
}


const server = http.createServer(Application);
server.on('request', function (req, res) {
    console.log(new Date());
})
server.listen(8080, () => { console.log('server ready') })


