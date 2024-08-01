var express=require('express');
var app=express();
app.set('view engine','ejs');
app.set('views','./view');
app.get('/myway',function(req,res) {
	res.render('index');
});
app.listen(4600);