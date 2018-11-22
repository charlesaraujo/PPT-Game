var http = require('http');
var fs = require('fs');
var url = require('url');

var pathPage = function(page){
      return __dirname + "/" + page + ".html";
};

var router = function(pathname){
    if(pathname && pathname != "/"){
        var exist = fileExists( pathPage(pathname) );
        return exist ? pathPage(pathname) : pathPage("erro");
    }
    return pathPage("index");
};

var fileExists = function(filePath){
    try{
        return fs.statSync(filePath).isFile();
    }catch (err){
        return false;
    }
};

var server = http.createServer(function (request, response) {
    var page = router( url.parse(request.url).pathname );
    fs.readFile(page, function(err, data){
        response.end(data);
    });
});

server.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});