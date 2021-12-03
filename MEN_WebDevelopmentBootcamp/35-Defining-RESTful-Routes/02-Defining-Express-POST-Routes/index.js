const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/' , (req , res)=>{
    res.send('hello from simple server :)');
});

// tacos
app.get('/tacos' , (req , res)=>{
    res.send('GET some tacos');
});
app.post('/tacos' , (req , res)=>{
   res.send('POST about your tacos');
})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))