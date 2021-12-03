const express = require('express');
const app = express();
const port = 3000;


app.get('/' , (req , res)=>{
   res.send(`Listening on port ${port}`);
});


app.get('/r/:subreddit/:uid' , (req , res)=>{
    const {subreddit, uid} = req.params;

   res.send(`${uid}: ${subreddit} `);

})

app.get('/search' , (req , res)=>{
    const {q} = req.query;
    res.send(`<h2>Search results for q = ${q}</h2>`);

})

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port));