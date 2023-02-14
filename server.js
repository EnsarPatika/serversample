const http = require("http")

const port = "5000"
const hostname ="127.0.0.1"

const server = http.createServer((req,res)=>{
    // console.log(req.url)
    if( req.url== "/" || req.url== "/index" ) {
        res.statusCode="200";
        res.setHeader("Content-type","text/html");
        res.write(`<h2> Index sayfasina hosgeldiniz </h2>`);
        res.end()
    }
    else if(req.url== "/hakkimda" ) {
        res.statusCode="200";
        res.setHeader("Content-type","text/html");
        res.write(`<h2> Hakkimda sayfasina hosgeldiniz </h2>`);
        res.end()
    }
    
    else if(req.url== "/iletisim" ) {
        res.statusCode="200";
        res.setHeader("Content-type","text/html");
        res.write(`<h2> Iletisim sayfasina hosgeldiniz </h2>`);
        res.end()
    }
    else{
        res.statusCode="404";
        res.setHeader("Content-type","text/html");
        res.write(`<h2> Not found </h2>`);
        res.end()
    }   
})

server.listen(port,hostname,()=>{
    console.log("Listening...")
})