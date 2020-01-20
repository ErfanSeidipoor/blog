const express = require('express')
const bodyParser = require('body-parser')

require('./db')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    res.send('Hi there')
})

require('./router')(app)

const port = process.env.PORT
app.listen( port , ()=> console.log(`server is runnig on ${port}`))