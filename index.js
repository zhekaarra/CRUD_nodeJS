import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js"
import fileUpload from 'express-fileupload'

const PORT = 4000
const db_URL = `mongodb+srv://User:User@cluster0.6ezpr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const app = express()



app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)



async function startApp(){
  try {
     await mongoose.connect(db_URL,  {useUnifiedTopology: true, useNewUrlParser: true })
    app.listen(PORT,()=>console.log("server was start on PORT" + PORT))
  }catch (e){
    console.log(e)
  }
}

startApp()
