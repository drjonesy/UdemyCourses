const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// set templating = ejs
// define view path (safeguard)

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/' , (req , res)=>{
   res.render('home');
});

app.get('/rand' , (req , res)=>{
    const num = Math.floor(Math.random() * 10) + 1;
    // option to pass key:value using the same name
    const vars =  {num};
    res.render('random', vars); // second argument takes an object
    // second argument can be: {rand: num} // and you would call the key in the ejs file
});

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port));