const express=require('express');
const path=require('path');
const app=express();

app.use(express.static(path.join(__dirname,'static')));

app.get('/luck',(req,res)=>{
    res.sendFile(path.join(__dirname,'static','index.html'));   
});

app.listen(process.env.PORT||3000);