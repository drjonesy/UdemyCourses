const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');

const app = express();
const port = 3000;

// set views and engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// use json
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// method overriding
app.use(methodOverride('_method'));

// test data
let comments = [
    {
        id: uuidv4(),
        comment: "How the world changes with thyme!",
        username: "rosemary"
    }
];

// ===== routes
// Home GET
app.get('/' , (req , res)=>{
    res.render('home', {pageTitle: 'Comments | Welcome'});
});
// --- comments
// GET
app.get('/comments' , (req , res)=>{
    res.render('comments/index', {pageTitle: 'Comments | All', comments});
});

app.post('/comments' , (req , res) => {
    const {username, comment} = req.body;
    comments.push( {id: uuidv4(), comment, username} );
    res.redirect('/comments');
});

// --- New Form
app.get('/comments/new', (req, res) => {
    res.render('comments/new', {pageTitle: 'Comments | New'});
});
// --- Filter by ID
app.get('/comments/:id' , (req , res)=>{
    const {id} = req.params;
    const c = comments.find(c => c.id === id);
    res.render('comments/show_id', {pageTitle: 'Comments | By ID', c});
});
// --- EDIT by ID
app.get('/comments/:id/edit' , (req , res)=>{
    const {id} = req.params;
    const c = comments.find(c => c.id === id);
    res.render('comments/edit', {c, pageTitle: 'Comments | Edit'})
});

app.patch('/comments/:id', (req, res)=>{
    const { id } = req.params; // get url parameter(s)
    const result = comments.find(c => c.id === id); // check if there is comment with a matching ID
    const newCommentText = req.body.comment; // assign the req.body.comment value to a variable
    result.comment = newCommentText; // update the comment with matching ID to the new text
    res.redirect('/comments'); // redirect the user to the all comments page.
});

// --- DELETE by ID
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
});


app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))