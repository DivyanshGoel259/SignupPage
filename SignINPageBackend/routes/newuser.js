const express = require("express")
const User = require("../db")
const router = express()

router.use(express.json())

router.post("/signup", async (req, res) => {
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

module.exports = router