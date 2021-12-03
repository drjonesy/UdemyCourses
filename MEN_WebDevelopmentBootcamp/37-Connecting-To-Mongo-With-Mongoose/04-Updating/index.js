const mongoose = require("mongoose");

function openConnection() {
  mongoose
    .connect("mongodb://localhost/films", {
      userNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("CONNECTED...");
    })
    .catch(() => {
      console.log("FAILED TO CONNECT!!!");
    });
}

function closeConnection() {
  mongoose.disconnect().then(() => {
    console.log("...DISCONNETED!");
  });
}

// open connection
openConnection();

// model

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);

Movie.find({}).then((data) => {
  console.log(data);
});
Movie.find({ score: { $gte: 8.3 } }, (err, docs) => {
  console.log(docs);
});

// Movie.find({score: {$gte: 8.3}})
// .then((err, docs)=>{
//     if(err){console.log(err);}
//     if(docs){console.log(docs);}
// })
// .then(()=>{ closeConnection() });

// Find and Update

// Movie.findOneAndUpdate({title: 'Amadeus'}, {year: 1983})
// .then((err, docs) => {
//     if(err) console.log(err);
//     if(docs) console.log(docs);
// });
// Movie.findOne({title: 'Amadeus'})
// .then((err, docs) => {
//     if(err) console.log(err);
//     if(docs) console.log(docs);
// })
// .then(()=>{
//     closeConnection();
// });
