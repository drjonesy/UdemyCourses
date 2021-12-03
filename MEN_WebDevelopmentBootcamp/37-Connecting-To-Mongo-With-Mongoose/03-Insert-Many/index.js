const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/films', {useNewUrlParser: true, useUnifiedTopology: true})
.then( ()=>{
    console.log('CONNECTED...');
}).catch(()=>{
    console.log('FAILED TO CONNECT!!!');
});

// const movieSchema = new mongoose.Schema({
//     title: String,
//     year: Number,
//     score: Number,
//     rating: String 
// });

// const Movie = mongoose.model('Movie', movieSchema);

// // insertMany takes an array. It returns a promise. And does not need to call the .save() method
// Movie.insertMany([
//     { title: 'Amelie',              year: 2001,     score: 8.3,     rating: 'R' },
//     { title: 'Alien',               year: 1979,     score: 8.1,     rating: 'R' },
//     { title: 'The Iron Giant',      year: 1999,     score: 7.5,     rating: 'PG' },
//     { title: 'Stand By Me',         year: 1986,     score: 8.6,     rating: 'R' },
//     { title: 'Moonrise Kingdom',    year: 2021,     score: 7.3,     rating: 'PG-13' }
// ])
// .then( (data) => {
//     console.log("IT WORKED");
//     console.log(data);
// })

// close the connection
mongoose.disconnect();
console.log('...DISCONNECTED');