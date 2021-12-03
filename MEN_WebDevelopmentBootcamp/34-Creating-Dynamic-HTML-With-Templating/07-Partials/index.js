const express = require('express');
const path = require('path');
const jsonData = require('./data/reddit_posts.json');


const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/' , (req , res)=>{
    const name = "home";
    res.render('home', {name});
});

app.get('/r/:subreddit' , (req , res)=>{
    const {subreddit} = req.params;
    const data = jsonData[subreddit];
    res.render('subreddit', {...data});
});


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))