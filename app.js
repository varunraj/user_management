// This is the http server that will serve index.html file

var http = require('http');
var express = require('express');
var app = express();

// Get the buffer containing index.html and pass to the / router


app.get('/', function(req,res){
    app.set('Content-Type','text/html');
    res.sendfile("./index.html");
})

http.createServer(app).listen(8080, function(){
    console.log("Web Server running on port 8080");

});