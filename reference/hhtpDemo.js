const http=require("http");

// create server 

http.createServer((req, res)=>{
    // write response
    res.write("Hello World");
    res.end();
}).listen(5000,()=>console.log("server running"));