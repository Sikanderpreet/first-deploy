const http = require("node:http")


    http.createServer((req,res)=>
{
    if(req.url==="/"){
        res.writeHead(200,{"Contetnt-Type":"text/plain"});
        res.end("this is my first web deployment over render");
    }else{
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("this is my first web deployment over render");

    }
}).listen(8081,()=>{
    console.log(`running at 8081`);
});
