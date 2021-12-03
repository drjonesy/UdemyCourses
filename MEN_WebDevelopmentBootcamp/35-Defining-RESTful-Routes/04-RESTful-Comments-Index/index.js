const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = 3000;

// use ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true})); // parse req.body as json through web form
app.set(express.json()); // parse req.body as json

// ==== TEST Data
const comments = [
    {
        id: uuidv4(),
        username: 'Todd',
        comment: 'lol that is soooo funny!'
    },
    {
        id: uuidv4(),
        username: 'Skyler',
        comment: 'I like to go birdwatching with my dog'
    },
    {
        id: uuidv4(),
        username: 'Sk8erBoi',
        comment: 'Plz delete yoru account, Todd'
    },
    {
        id: uuidv4(),
        username: 'onlysatswoof',
        comment: 'woof woof woof'
    }
];

// ==== Routes ===
// home
app.get('/' , (req , res)=>{
    res.send('Welcome home')
});
// show all comments
app.get('/comments' , (req , res)=>{
    res.render('comments/index', { comments });
});
// === add a new comment
// form
app.get('/comments/new' , (req , res)=>{
    res.render('comments/new')
});
// add data via post
app.post('/comments' , (req , res)=>{
    const { username, comment } = req.body;
    comments.push({id: uuidv4(), username, comment});
    res.redirect('/comments');
});
// filter by id
app.get('/comments/:id' , (req , res)=>{
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', {comment});
});


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))