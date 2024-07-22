const express = require("express")
const User = require("../db")
const router = express.Router()
const userAuthMiddleware = require("../middlewares/userAuth")

router.use(express.json())

router.post("/signup", userAuthMiddleware , async (req, res) => {
    
    console.log("hello")
    const password = req.body.password
    const FirstName = req.body.FirstName
    const LastName = req.body.LastName
    const email = req.body.email

    const response = await User.create({
        FirstName: FirstName,
        LastName: LastName,
        password: password,
        email: email
    })
    res.status(200).json({
        msg:"User Created Succesfully"
    })
})

router.post("/signin", (req, res) => {
    
    const password = req.body.password
    const email = req.body.email

    User.findOne({
        password: password,
        email: email
    }).then((resp)=>{
        if(resp){
        res.status(200).json({
            msg: "Login Succesfull"
        })
    } else{
        res.json({
            msg: "Username and Password not Exist"
        })
    }
    })

}

)
 
module.exports = router