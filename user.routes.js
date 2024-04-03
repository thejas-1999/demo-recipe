import express from 'express'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { UserModel } from '../models/users.model.js'


const router = express.Router()

//get the users
/* router.get('/',async (req,res) => {
    try {
        const getUser = await UserModel.find({})
        res.status(201).json(getUser)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}) */

//register a user
router.post('/register',async (req,res) => {
    try {
        const {username,password} = req.body;
        const user = await UserModel.findOne({username})
        if(user){
            return res.json({message:`USer already exist!`})
        }
        const hashPassword = await bcrypt.hash(password,10);
        const newUser = new UserModel({username,password:hashPassword})
        await newUser.save()
        res.json({message:`User registered successfully!`})
    } catch (error) {
      res.status(400).json({message:error.message})  
    }
 
})

//login user
router.post('/login',async (req,res) => {
    try {
        const {username,password} = req.body;
        const user = await UserModel.findOne({username})
        if(!user){
            return res.status(401).json({ message: `User Doesn't Exist` });
        }

        const isPasswordValid = await bcrypt.compare(password,user.password)
        if(!isPasswordValid){
            return res.status(404).json({ message: `Username or Password is Incorrect` });
        }
        const token = jwt.sign({id:user._id},'secret')
        res.json({token,userID:user._id})
    } catch (error) {
        res.send(400).json({message:error.message})
    }
})



export {router as userRouter};