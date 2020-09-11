if(process.env.NOD_ENV == "development"){
  require('dotenv').config()
}
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT
const routes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/",routes)
app.listen(port, () =>{
  console.log(`App is Listening on ${port}`)
})
