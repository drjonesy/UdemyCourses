const express = require('express');
const path = require('path');
const redditData = require('./data.json');
// console.log(redditData);

const app = express();
const port = 3000;



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/' , (req , res)=>{
   res.render('home');
});

app.get('/r/:subreddit' , (req , res)=>{
   const {subreddit} = req.params;
   const data = redditData[subreddit];
   // since the data contains the object for the subreddit.
   // it's easier to just use a spread instead of naming all the keys
   if(data){
      res.render('subreddit', {...data});
   } else {
      res.render('notfound', {subreddit});
   }

});



app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))