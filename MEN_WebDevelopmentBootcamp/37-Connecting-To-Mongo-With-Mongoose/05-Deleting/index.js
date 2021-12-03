const mongoose = require('mongoose');

function openConnection(){
    mongoose.connect("mongodb://localhost/films", {userNewUrlParser: true, useUnifiedTopology: true})
    .then( ()=>{
        console.log('CONNECTED...');
    }).catch(()=>{
        console.log('FAILED TO CONNECT!!!');
    });
}

function closeConnection(){
    mongoose.disconnect()
    .then(()=>{
        console.log('...DISCONNETED!');
    })
};

// open connection
openConnection();

// model

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String 
});


const Movie = mongoose.model('Movie', movieSchema);


Movie.deleteOne({year: 2001, score: {$gt: 8}})
.then((err,docs) => {
    if(err) console.log(err);
    if(docs) console.log(docs);
})
.then(()=>{
    closeConnection();
})