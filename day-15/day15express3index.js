var express=require('express');
var app=express();
var things=require('./day15express3.js');
app.use('/sashi',things);
app.listen(4000);