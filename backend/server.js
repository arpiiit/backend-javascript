import express from 'express'


const app=express();

// app.get('/',(req, res)=>{
//     res.send("Server is ready");
// });

//get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A joke',
            content:'this is a joke',
        },
        {
            id:2,
            title:'b joke',
            content:'this is a joke',
        },
        {
            id:3,
            title:'c joke',
            content:'this is a joke',
        },
        {
            id:4,
            title:'d joke',
            content:'this is a joke',
        },
        {
            id:5,
            title:'e joke',
            content:'this is a joke',
        },
    ];
    res.send(jokes);
})

const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
})