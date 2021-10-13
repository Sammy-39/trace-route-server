const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors({ origin: 'http://localhost:3000'}))

const locationsRouter = require("./routes/locationsRouter")

app.use('/api/v1', locationsRouter)

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log("Server is running on port",port)
})