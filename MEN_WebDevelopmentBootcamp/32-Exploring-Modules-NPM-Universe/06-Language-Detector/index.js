const langs = require('langs');
const franc = require('franc');
const colors = require('colors');


const args = process.argv[2];
const langCode = franc(args);

if(langCode === 'und') {
    console.log('Undefined: Try more text!!!'.red);
} else {
    console.log(langs.where("3", langCode).name.green);
}