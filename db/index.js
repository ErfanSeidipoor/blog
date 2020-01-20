const mongoose = require('mongoose')

mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then( ()=> console.log("db is connected"))
    .catch( ()=> console.log("db isnt connected"))