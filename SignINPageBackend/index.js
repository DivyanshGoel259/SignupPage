const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.use(express.json())
app.use("/user", require("./routes/newuser"))
app.listen(3000)