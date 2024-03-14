const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const cors = require("cors")
const router =  require("./routes")
const errorHandler = require('./utils/ErrorHandler')
const connectDB = require("./db/db")
const app = express()

const PORT = process.env.PORT || 6000
connectDB().then(()=>console.log('DB CONNECTED'))
.catch((err)=>console.log('DB CONNECTION FAILED', err))
app.use(cors('*'))
app.use(express.json())
app.use(router)
app.use(errorHandler)


app.listen(PORT,()=>{
    console.log(` SERVER RUNNING ON PORT - ${PORT}`)
})
