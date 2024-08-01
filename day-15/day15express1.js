var express=require('express');
var app=express();
app.get('/sashi',function(req,res) {
	res.send("Welcome to express js world tested by sashi");
});
app.listen(3000);