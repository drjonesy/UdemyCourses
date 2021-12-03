const mongoose = require('mongoose');
// connect to database
mongoose.connect('mongodb://localhost:27017/moviesApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then( ()=>{
    console.log("CONNECTION OPEN");
})
.catch(err => {
    console.log("OH NO ERROR");
    console.log(err);
});
