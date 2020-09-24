if(process.env.NODE_ENV == "development"){
    require('dotenv').config()
  }

  require('dotenv').config() // Matiin saat ingin deploy

const express = require(`express`)
const app = express()
const port = process.env.PORT
const routerIndex = require(`./routes/index.js`)
const cors = require(`cors`)

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.use(`/`,routerIndex)



app.listen(port,()=>{
    console.log(`Kanban App is running at port:${port}`)
})