const express=require('express');
const app=express();

app.get('/',(req, res)=>{
    res.send("just got started!")
})
app.listen(3000, ()=>{
    console.log("got in!!")
})