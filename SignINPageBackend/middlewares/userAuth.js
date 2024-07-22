const User = require("../db")
const userAuthMiddleware = async (req,res,next)=>{
    console.log("reached")
    try {
    const response = await User.findOne({
        email:req.body.email
    })
    if(response){
        return res.status(409).json({
            msg:"Email Already Exist"
        })
    } else {
        next();
    }
} catch(err){
    console.error("Error checking email existence:", err);
    return res.status(500).json({
      msg: "Internal Server Error"
    })
}
}


module.exports = userAuthMiddleware