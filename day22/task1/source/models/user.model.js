const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    Tid: {   type:Number,
    required:true
    }, 
    Tname: {   type:String,
    required:true 
    },
    Tage:{   type:Number,
    required:true
    },
    Taddress: {   type:String,
    required:true
    },
    Tphone:{   type:Number,
    required:true
    },
    Temail:{   type:String,
    required:true
    },
    Tdob:{   type:Date,
    required:true
    },
    is_created:{type:Boolean,default:false},
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false },
    is_updated: {
           type: Boolean, default: false
        }
}, {
    timestamps: true,
    collection:'Topper'

});
mongoose.pluralize(null);

module.exports = mongoose.model('Topper', UserSchema);