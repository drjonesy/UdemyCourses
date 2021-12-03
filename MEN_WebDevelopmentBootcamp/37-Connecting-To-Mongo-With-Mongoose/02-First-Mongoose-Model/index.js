const mongoose = require('mongoose');


// create connection
// if the database does not exist it will be created
mongoose.connect('mongodb://localhost/films', {useNewUrlParser: true, useUnifiedTopology: true})
.then( ()=>{
    console.log('CONNECTED');
}).catch(()=>{
    console.log('FAILED TO CONNECT');
});

const movieSchema = new mongoose.Schema({
    title: String,
    score: Number,
    rating: String,
    year: Number
});

const Movie = mongoose.model('Movie', movieSchema);

const amadeus = new Movie({
    title: "Amadeus",
    score: 9.2,
    rating: "PG-13",
    year: 1983
});

amadeus.save();
// close connection

mongoose.disconnect();