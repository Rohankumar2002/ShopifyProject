//import express app
const exp=require("express")
const app=exp();
const path=require("path");

//connect angular app with express server
app.use(exp.static(path.join(__dirname,'./dist/FIRSTPROJECT')))

//import APIS
const userApi=require("./APIS/user-api")



//execute specific api based on the path
app.use("/user",userApi)
//import MongoClient
const mc=require("mongodb").MongoClient;

//connection string
const databaseUrl="mongodb+srv://rohan02:kumar02@datacluster.0fsi3.mongodb.net/userDb?retryWrites=true&w=majority"

let userCollectionObj;

//connect to DB
mc.connect(databaseUrl,{useNewUrlParser:true,useUnifiedTopology:true},(err,client)=>{
    if(err){
        console.log("error in db connection",err);
    }
    else{
        //get database object
        databaseObj=client.db("userDb")
        //create usercollection object
        let userCollectionObj=databaseObj.collection("usercollection")
        app.set("userCollectionObj",userCollectionObj)
        let userCartCollectionObject=databaseObj.collection("usercartcollection")
        app.set("userCartCollectionObject",userCartCollectionObject)
        console.log("connected to database")
    }
})

//invalid path
app.use((req,res,next)=>{
    res.send({message:`path ${req.url} is invalid`})
})
//error handling middleware
app.use((err,req,res,next)=>{
    res.send({message:`error is ${err.message}`})
})














// assign port
const port=5000;
app.listen(port,()=> console.log(`server on ${port}...`))