//create mini express application
const exp=require("express")
const userApi=exp.Router();
const expressErrorHandler=require("express-async-handler")
const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken")



//add body parsing middleware
userApi.use(exp.json())








//using await and async
//http://localhost:3000/user/getusers
//get users
userApi.get("/getusers",expressErrorHandler(async (req,res,next)=>{
     
    let usersList=await userCollectionObj.find().toArray()
    res.send({message:usersList})
}))




//using async and await
//getting user by username
//http://localhost:3000/user/getuser/<username>

userApi.get("/getuser/:username",expressErrorHandler(async (req,res,next)=>{

    let userCollectionObj = req.app.get("userCollectionObj")
    //get username from url
    let un=req.params.username;

    //search
    let userObj=await userCollectionObj.findOne({username:un})
    if(userObj===null){
        res.send({message:"user not existed"})
    }
    else{
        res.send({message:userObj})
    }
}))





//using async and await
//create user
//http://localhost:3000/user/createuser
userApi.post("/createuser",expressErrorHandler(async (req,res,next)=>{
    let userCollectionObj = req.app.get("userCollectionObj")
     //get user Obj
     let newUser=req.body;
     //search for existing user
     let user=await userCollectionObj.findOne({email:newUser.email})
     //if user existed
     if(user!==null){
         res.send({message:"user already existed"})
     }
     else{
         //hash password
         let hashedPassword=await bcryptjs.hash(newUser.password,7)
         //replace password
         newUser.password=hashedPassword;
         //insert
         await userCollectionObj.insertOne(newUser)
         res.send({message:"New user created"})
     }
}))







//add to cart
userApi.post("/add-to-cart", expressErrorHandler(async (req, res, next) => {

    let userCartCollectionObject = req.app.get("userCartCollectionObject")

    let newProdObject = req.body;

    //find usercartcollection 
    let userCartObj = await userCartCollectionObject.findOne({ username: newProdObject.username })

    if (newProdObject.username===null){
             res.send({message:"Login Required"})
    }
    //if userCartObj is not existed
    else if (userCartObj === null) {

        //create new object
        let products = [];
        products.push(newProdObject.productObject)

        let newUserCartObject = { username: newProdObject.username, products }

        //insert it
        await userCartCollectionObject.insertOne(newUserCartObject)

        let latestCartObj = await userCartCollectionObject.findOne({ username: newProdObject.username })
        res.send({ message: "New product Added", latestCartObj: latestCartObj })

    }
    //if existed
    else {

        //push productObject to products array
        userCartObj.products.push(newProdObject.productObject)
        //update document
        await userCartCollectionObject.updateOne({ username: newProdObject.username }, { $set: { ...userCartObj } })
        let latestCartObj = await userCartCollectionObject.findOne({ username: newProdObject.username })
        res.send({ message: "New product Added", latestCartObj: latestCartObj })
    }





}))







//get products from user cart
userApi.get("/getproducts/:username", expressErrorHandler(async (req, res, next) => {

    let userCartCollectionObject = req.app.get("userCartCollectionObject")

    let un = req.params.username;

    let userProdObj = await userCartCollectionObject.findOne({ username: un })

    if (userProdObj === null) {
        res.send({ message:'Cart-empty'})
    }
    else {
        res.send({ message:userProdObj})
    }


}))

























//modify user
//http://localhost:3000/user/updateuser/<username>
userApi.put("/updateuser/:username",expressErrorHandler(async (req,res,next)=>{
    let userCollectionObj = req.app.get("userCollectionObj")
    //get modified user
    let modifiedUser=req.body
    //update
    await userCollectionObj.updateOne({username:modifiedUser.username},{$set:{...modifiedUser}})
    //send res
    res.send({message:"user modified"})
}))



//delete user
userApi.delete("/deleteuser/:username",expressErrorHandler(async (req,res)=>{
    let userCollectionObj = req.app.get("userCollectionObj")
    //get username from url
    let un=req.params.username;
    //find the user
    let user=await userCollectionObj.findOne({username:un})

    if(user===null){
        res.send({message:"user not existed"})
    }
    else{
        await userCollectionObj.deleteOne({username:un})
        res.send({message:"user removed"})
    }
}))





//user login
userApi.post("/login",expressErrorHandler(async (req,res)=>{

    let userCollectionObj = req.app.get("userCollectionObj")

    //get user credentials
    let credentials=req.body;

    //search for username
    let user=await userCollectionObj.findOne({email:credentials.email});

    //if user not found
    if(user===null){
        res.send({message:"Invalid username"})
    }
    else{
        //compare the password
        let result=await bcryptjs.compare(credentials.password,user.password)
        //if not matched
        if(result===false){
            res.send({message:"Invalid password"})
        }
        else{
            //create token
            let signedToken=jwt.sign({email:credentials.email},'abcdef',{expiresIn:"120"})
            //sent token to client
            res.send({message:"login success",token:signedToken,email:credentials.email,userObj:user})
        }
    }
}))
















//export
module.exports=userApi;