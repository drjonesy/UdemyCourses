const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// define templating as EJS and set path for views
app.set('view engine', 'ejs'),
app.set('views', path.join(__dirname, 'views'));

// routes
app.get('/' , (req , res)=>{
    res.render('home');
});


// listen
app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))