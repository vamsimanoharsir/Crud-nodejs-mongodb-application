const express=require('express')
const mongoose=require('mongoose')
var bodyParser=require('body-parser')
const app=express()
mongoose.connect("mongodb://localhost:27017/sampledb",{useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("connected to mongo")
})

//(this is for post request)we are making sure that our webapp understands
// json data in post request
app.use(express.json())

//this is imp without this our requests will not work on browser
app.use(bodyParser.json());

app.listen(3000,function(){
    console.log("server is listening on port 3000")
})


//now we want to create different routes for crud operations
//whenever there is endpoint,any endpoint like '/aliens', aliens.js file should handle them
const alianrouter=require('./routes/aliens.js')
app.use('/aliens',alianrouter)//line 11 and 13 should always be writen before routes line i.e, 24



