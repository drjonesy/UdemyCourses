const jokes = require('give-me-a-joke');
const colors = require('colors');

jokes.getRandomDadJoke((joke)=>{
    console.log(colors.green(joke));
});
