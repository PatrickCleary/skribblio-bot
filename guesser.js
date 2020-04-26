let wordlist = require('./wordlist.json');
let jQuery = require('jquery');
const open = require ('open');




wa = []

for (let prop in wordlist){
    console.log(prop.length)
    if(wa[prop.length] == undefined){
        wa[prop.length] = []
    }
    wa[prop.length].push(prop) 
    
}

function playGame(url){
    (async () => {
    let potato = await open(url);
console.log(potato)
})();


}

playGame('https://skribbl.io/')