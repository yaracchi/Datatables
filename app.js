
var url = require('url');
var fs = require('fs');

function renderHTML(path,res){
        res.writeHead(200,{'Content-Type':'text/html'});
    
   
       fs.readFile(path,null,function(error,data){
          
           if(error)
           {
               res.writeHead(404);
               res.write('file not found');
           }else{
               
               res.write(data);
           }
           res.end();
       });
     
}

module.exports = {
handleRequest : function(req,res){
  res.writeHeader(200,{'Content-Type':'text/html'});
  
  var path = url.parse(req.url).pathname;
  switch(path){
      
      case '/':
                renderHTML('./home.html',res) ;
                break;
      default:
          res.writeHead(404);
          res.write('route not definded');
          res.end();
            }
}

}