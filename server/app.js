const express = require(`express`)
const app = express()
const port = 3000
const routerIndex = require(`./routes/index.js`)

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(`/`,routerIndex)



app.listen(port,()=>{
    console.log(`Kanban App is running at port:${port}`)
})