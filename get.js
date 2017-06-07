var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

var posts = [
    {id: 1, post: "pirmas", body: "pirmas pirmas"},
    {id: 2, post: "antras", body: "antras antras"},
    {id: 3, post: "trecias", body: "trecias trecias"},
];

module.exports = app.get;
app.get('/', function(req, res){
    res.send(posts);
});
