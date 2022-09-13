const express=require('express');
const app=express();
const port = process.env.PORT || 3000;

app.get('/',(_req,res)=>{
    res.sendFile(__dirname+'/homepage.html');
})

app.listen(port,()=>{
    console.log("App is listening on port");
})