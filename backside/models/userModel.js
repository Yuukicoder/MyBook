const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    username:{
        type:String,maxlength:25,
        trim: true, unique: true, max: 25
    },
    fullname:{
        type: String, trim: true, max: 25
    },
    email:{
        type: String,trim: true,require: true
    },
    avatar:{
        type: String,
        default:''
    },
    password:{
        type: String, require: true
    },
    friends:[{type:mongoose.Types.ObjectId,ref:'user'}],
    following:[{type:mongoose.Types.ObjectId,ref:'user'}]
},{
    timestamps: true
})
module.exports = mongoose.model('user', userSchema)

