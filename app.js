const express=require('express');
const app=express();

const port=process.env.port || 3000;
app.get('/',(req, res)=>{
    res.send("just got started! thats right baby")
})
app.listen(port, ()=>{
    console.log("got in!!")
})