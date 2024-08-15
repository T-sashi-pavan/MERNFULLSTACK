const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
//config database
mongoose.connect('mongodb://localhost:27017/mersal');
//models
const itemSchema=new mongoose.Schema({
	sname:String,
	author:String,
	dob:String,
	address:String

});
const Item = mongoose.model('atlee',itemSchema);
//controllers and routes
app.get('/items',async(req,res)=> {
	const items=await Item.find();
	res.send(items);
});
app.get('/items/:id',async(req,res)=> {
	const items=await Item.findOne({_id:req.params.id});
	res.send(items);
});
app.post('/items',async(req,res)=>{
	const item=new Item({sname:req.body.sname,
						 author:req.body.author,
						 dob:req.body.dob,
						 address:req.body.address});
	await item.save();
    res.send(item);
});

app.put('/items/:id',async(req,rea)=>{
	const item=await Item.findByIdAndUpdate(req.params.id,req.body,{new:true});
	res.send(item);
});
app.delete('/items/:id',async(req,res)=>{
	const item=await Item.findOneAndDelete({_id:req.params.id});
	res.send({message:'Item deleted'});
});
 
 app.listen(4200,()=>{
 	console.log('Server is running on port 4200');
 });