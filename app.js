const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require("mongoose");
const routes=require('./routes')


dotenv.config()
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(console.log("MongoDB successfully connected!")).catch(err => console.log(err))
app.use('/api',routes)

app.listen(process.env.PORT || 8000, () => {
    console.log("backend is running on port "+process.env.PORT);
})

