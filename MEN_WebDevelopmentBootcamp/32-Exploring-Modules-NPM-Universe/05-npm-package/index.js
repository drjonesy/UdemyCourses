const figlet = require('figlet');
const colors = require('colors');

const text = "Rainbow";
figlet(text, (err, data)=>{
    if(err){
        console.log('something went wrong...');
        console.dir(err);
        return;
    }
    console.log(colors.rainbow(data));
});