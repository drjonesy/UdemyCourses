const express = require('express');
const app = express();

const port = 3000;

app.get('/' , (req , res)=>{

   res.send('Welcome home!!!');

});

// patterns
app.get('/r/:subreddit/:postId' , (req , res)=>{
    const {subreddit, postId} = req.params;
    res.send(`<h1>View Post ID: ${postId} on '${subreddit}' subreddit</h1>`);

});


app.get('*' , (req , res)=>{

   res.send('Try something else');

});

app.listen(port, (req, res)=>{
    console.log(`Listening on port ${port}`);
});


