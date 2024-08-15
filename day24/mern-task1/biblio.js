const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/biography');
// Models
const itemSchema = new mongoose.Schema({
  cmid: { type: Number, required: true },
  cmname: { type: String, required: true },
  cmdob: { type: Date, required: true },
  mstatus: { type: Boolean, required: true, default: false },
  cmsalary: { type: Number, required: true },
  cmaddress: [{
    city: { type: String, required: true },
    pincode: { type: Number, required: true }
  }],
  cmemail: { type: String, required: true, unique: true }
});

itemSchema.path('cmemail').validate({
  validator: async function(v) {
    const userCount = await User.countDocuments({ cmemail: v }).exec();
    return userCount === 0;
  },
  message: 'The email already exists in the system.'
});


//  model
const Item = mongoose.model('cminfo', itemSchema);

// Routes and Controllers
app.get('/cmdata', async (req, res) => {
 
    const items = await Item.find();
    res.send(items);
  }
);

app.get('/cmdata/:id', async (req, res) => {
    const item = await Item.findById(req.params.id);
    res.send(item);
  }
);

app.post('/cmdata', async (req, res) => {
    const item = new Item({cmid: req.body.cmid,
 						   cmname: req.body.cmname,
 						   cmdob: req.body.cmdob,
 						   mstatus: req.body.mstatus,
 						   cmsalary: req.body.cmsalary,
 						   cmaddress: req.body.cmaddress,
 						   cmemail: req.body.cmemail
 							});
    await item.save();
    res.send(item);
  }
);

app.put('/cmdata/:id', async (req, res) => {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(item);
  }
);

app.delete('/cmdata/:id', async (req, res) => {
    const item = await Item.findByIdAndDelete(req.params.id);
    res.send({ message: 'Item deleted' });
  }
);

// Start server
app.listen(4200, () => {
  console.log('Server is running on port 4200');
});
