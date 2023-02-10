import express from 'express';
import User from '../models/User.js';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import fetchUserMid from '../Middleware/fetchUserMid.js';

const JWT_SECRET = 'thisisgood$ecretkey.anditsmadebytalha';

const createUser = async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const mail = await User.findOne({"email": req.body.email});
    if(mail){
      return res.status(400).json({"error":"Already used email. Please login."});
    }
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(req.body.password, salt);
    const payload = {
      data:{
      id: req.body.id
      }
    }
    const jwtSign = jwt.sign(payload,JWT_SECRET);
    console.log(jwtSign);
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    }).then(user => res.json(user)).catch(err=>console.log(err));
  };


const login = async(req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  
  const {email,password} = req.body;
    try {
       let user = await User.findOne({email});
       const passCompare = await bcrypt.compare(password, user.password);
       if(!user || !passCompare){
         return res.status(400).json({error: 'Sorry try to login with correct credentials.'});
       }
       const payload = {
        data:{
        id: user.id
        }
      }
      const authtoken = jwt.sign(payload,JWT_SECRET,{expiresIn: '2d'});
      res.json({authtoken});
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
};

  const fetchUser = async(req,res)=>{
    try{
      const userId = await req.user.id;
      const user = await User.findById(userId).select("-password");
      res.send(user);
    }catch(error){
      console.error(error.message);
      res.status(403).json('Invalid token. Please try different.');
    }
  }


export {createUser,login,fetchUser};