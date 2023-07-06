const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const register = async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password,salt)
        req.body.password = hashedPassword
        const user = new User(req.body)
        const userRes = await user.save()
        res.status(200).send(userRes)
    }catch(err){
        console.log("register fail!")
        res.status(502).send(err)
    }
}

const login = async(req,res)=>{
    const user = await User.findOne({username: req.body.username})
    if (!user) return res.status(400).json("wrong username or password!")
    const {password,...others} = user._doc
    const checkPassword = await bcrypt.compare(req.body.password,password)
    if (!checkPassword) return res.status(400).json("wrong username or password")

    const token = jwt.sign({id:others._id},"secretKey");
    
    res
    .cookie("accessToken",token,{httpOnly: true,})
    .status(200).json(others)
}

const logout = (req,res)=>{
    res
    .clearCookie("accessToken",{secure: true,sameSite: "none"})
    .status(200).json("user has been logged out!")
}

module.exports = {register,login,logout}