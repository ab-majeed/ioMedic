const http = require ("http");
const fs = require("fs");
const path = require("path");
const port = process.env.PORT || 5000;
const hostname = "127.0.0.1";

const server = http.createServer((req,res) => {
   // if (req.url === '/') {
   //    fs.readFile(
   //        path.join(__dirname, "dashboard", "dashboard.html"), 
   //       (err,content) => {
   //         console.log(path.join(__dirname, "dashboard", "dashboard.html"))
   //          if (err) throw err;
   //          res.writeHead(200, {"Content-Type":"text/html"});
   //          res.end(content);
   //       }
   //    );
   // } 
   let filepath = path.join(__dirname,"dashboard", req.url == "/" ? "dashboard.html" :req.url)
   console.log(filepath);
   let extname = path.extname(filepath);
   console.log(extname);
   let contentType = "text/html"
   switch (extname) {
      case ".js":
         contentType = "text/javascript";
         break;
      case ".json":
         contentType = "application/json";
         break;
      case ".css":
         contentType = "text/css";
         break; 
      case ".jpg":
         contentType = "image/jpg";
         break;
      case ".png":
            contentType = "image/png";
            break;
      case ".ico":
            contentType = "image/icon";
            break;
   }
   fs.readFile(filepath, (err,content) => {
      if (err){
         if (err.code == "ENOENT"){
            res.statusCode = 404;
            res.end("<h1>404 Page not Found</h1>");
         }else{
            res.statusCode = 500;
            res.end("Server Erro:",err.code);
         }
      }else{
         res.writeHead(200, {"Content-Type":contentType});
         res.end(content);
      }
   })
});

server.listen(port, () => {
   console.log("Server stated at port:", port);
});
   


