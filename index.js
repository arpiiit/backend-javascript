//console.log("backend with javascript")

require('dotenv').config()
const express=require('express');
const app=express();
const port=4000
const github={
"name":'arpit',
"email":"arpit@fakalfl"

}
app.get('/',(req, res)=>{
    res.send("Hello word");
})

app.get('/login',(req,res)=>{
    res.send('<h1>this is arpit login page</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>this is arpit youtube page</h2>')
})
app.get('/github',(req,res)=>{
    res.json(github)
})

app.listen(process.env.PORT,()=>{
    console.log(`app listnig on port ${process.env.PORT}`);
})