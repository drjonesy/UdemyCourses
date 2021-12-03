const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// parsing req.body
app.use(express.urlencoded({extended: true})); // this line changes based on the type of request
// the current line above is design to only with URL form data
// to parse a json request add or replace with the following...
app.use(express.json());


app.get('/' , (req , res)=>{
    res.send('hello from simple server :)');
});

// tacos
app.get('/tacos' , (req , res)=>{
    res.send('GET some tacos');
});

app.post('/tacos' , (req , res)=>{
    // console.log(req.body);
    const {qty, meat} =  req.body;
   res.send(`Thank you for purchasing ${qty} ${meat} taco(s)`);
})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))