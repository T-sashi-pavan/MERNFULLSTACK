const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    cid: {   type:Number,
    required:true
    }, 
    caadhar: {   type:Number,
    required:true 
    },
    cpan:{   type:String,
    required:true
    },
    cdob:{   type:Date,
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
    collection:'customer'

});
mongoose.pluralize(null);

module.exports = mongoose.model('customer', UserSchema);