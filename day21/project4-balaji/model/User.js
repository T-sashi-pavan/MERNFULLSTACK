const mongoose = require('mongoose');
const Schema=mongoose.Schema
const passportLocalMongoose = require('passport-Local-mongoose');

const User = new Schema({
  cname: { type: String},
   cid: { type: Number},
  password: { type: String },
  cdob: { type: Date},
  caddress: { type: String}
});

User.plugin(passportLocalMongoose, { usernameField: 'cname' });

module.exports = mongoose.model('User', User);
