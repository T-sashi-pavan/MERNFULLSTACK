var express=require('express');
var app=express();
app.set('view engine','ejs');
app.set('views','./view');
app.get('/myway',function(req,res) {
	res.render('day15express5');
});
app.listen(4700);