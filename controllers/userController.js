const res = require('express/lib/response')
const User = require("../models/userRegistration")
const Feedback = require("../models/feedBack")
const feedData = async(req,res)=>{
    try{
        const feed = new Feedback({
            feed:req.body.feed
        })
        const result = await feed.save()
        res.render('Feedback')
    }catch(error)
    {
        res.send(error)
    }
}

const insertData = async(req,res)=>{
    try{
        const user = new User({
            name:req.body.name,
            state:req.body.state,
            email:req.body.email,
            psw:req.body.psw,
            dob:req.body.dob,
            city:req.body.city,
            phone:req.body.phone,
            pin:req.body.pin,
            role:"user"
        })
        const result = await user.save()
        res.render('Register')
    }
    catch(error){
        res.send(error)
    }
}

const checkLogin = async(req,res)=>{
    try{
        email=req.body.email;
        psw=req.body.psw;
        const result=await User.findOne({email,psw})
        if(result!=null)
        {
            try{
                req.session.email=result.email;
                req.session.role=result.role;
                if(result.role=="user")
                {
                    res.render('Home')
                }
                else{
                    res.render("Home")
                }
            }catch(error)
            {console.log(error)}
        }
        else{
            res.render("Login")
        }
    }catch(error)
    {res.send(error)}
}

module.exports={insertData,feedData,checkLogin}