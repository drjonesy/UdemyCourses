const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/' , (req , res)=>{
    res.render('home');
})

app.get('/r/:subreddit' , (req , res)=>{
    const {subreddit} = req.params;
    res.render('subreddit', {subreddit});
})

// array loop
app.get('/cats' , (req , res)=>{
    const cats = ['blue', 'monty', 'stephanie', 'winston'];
    res.render('cats', {cats});

})


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))