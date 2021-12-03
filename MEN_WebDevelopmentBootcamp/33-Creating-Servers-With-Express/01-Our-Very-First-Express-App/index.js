const template = require('./template');
const express = require('express');
const app = express()



app.use((req, res)=>{
    console.log("New Request after refresh");
    // res.send('Hello we got your requests... this is a response.')
    res.send(template.html);
});

app.listen(3000,()=>{
    console.log("Listing on port 3000");
})