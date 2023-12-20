const Users = require("../models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authCtrl = {
    register:async(req,res)=>{
        try{
            const{fullname, username,email,avatar,password} = req.body;
            const newUsername = username.toLowerCase().replace(/ /g,'');
            const user_name = await Users.findOne({username: newUsername})
            if (user_name) return res.status(400).json({msg:'this username already exists'})
            const Email = await Users.findOne({email:req.body.email})
            if(Email) return res.status(400).json({msg:'this username already exists'})
            if(password.length<6) return res.status(400).json({msg:'Password is very you(not strong enough)'})
            const passwordHash= await bcrypt.hash(password,13);
            const newUser = new Users({
                fullname, username:newUsername,email,avatar,password:passwordHash
            })
            console.log(newUser);
            
            
        }catch(err){
            res.status(500).json({msg: err.message})
        }
    },
    login:async(req,res)=>{
        try{

        }catch(err){
            res.status(500).json({msg: err.message})
        }
    }, 
    logout:async(req,res)=>{
        try{

        }catch(err){
            res.status(500).json({msg: err.message})
        }
    }
}
module.exports = authCtrl;