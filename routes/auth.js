import express from 'express';
import User from '../models/User.js';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { createUser,login,fetchUser } from '../iController/UserController.js';
import fetchUserMid from '../Middleware/fetchUserMid.js';
// import { login } from '../controller/UserController.js';

const router = express.Router();
const JWT_SECRET = 'thisisgood$ecretkey.anditsmadebytalha';
// Without Validator
// router.get('/',(req,res)=>{
//     console.log(req.body);
//     const user = User(req.body);
//     user.save();
//     res.send(req.body);
// })

// With VALIDATOR
router.post('/createuser',[body('email','Enter a valid email').isEmail(),
body('name','Enter a valid name').isLength({ min: 3 }),
body('password','Enter a valid password').isLength({ min: 5 })],createUser);

router.post('/login',[body('email','Enter a valid email').isEmail(),
body('password','Enter a valid password').exists()],login);



router.get('/fetchuser', fetchUserMid, fetchUser);



export default router;