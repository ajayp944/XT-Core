const http = require('http');

const Application = function(request,response){
    request.pipe(response);
}


const server = http.createServer(Application);
server.on('request',function(req,res){
    console.log(new Date());
})
server.listen(8080,()=>{console.log('server ready')})


