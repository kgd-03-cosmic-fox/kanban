const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const port = 3007
const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/",routes)
app.listen(port, () =>{
  console.log(`App is Listening on ${port}`)
})
