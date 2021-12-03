const express = require('express');
const path = require('path');
const data = require('./data.json');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// places files in selected directory to exist in the root
// example: /css/style.css   -- don't need to include /public/css/style.css
app.use(express.static(path.join(__dirname, 'public') ));


app.get('/' , (req , res)=>{
   res.render('home');
});

app.get('/r/:subreddit' , (req , res)=>{
    const {subreddit} = req.params;
    const rData = data[subreddit];
    res.render('subreddit', {...rData});
 });


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))