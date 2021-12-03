const express = require('express');
const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

// home
app.get('/', (req, res)=>{
    res.send("There no place like 127.0.0.1");
});
// cats
app.get('/cats', (req, res)=>{
    res.send("MEOW !!!");
});
// dogs
app.get('/dogs', (req, res)=>{
    res.send("WOOF !!!");
});

// everything else
app.get('*', (req, res)=>{
    res.send(`Sorry the request: ${req.url} is not found.`)
});