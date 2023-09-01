//Import starts
var figlet = require('figlet');
var colors = require('colors');
var align = require('align-text');
//Import ends

function banner(){
figlet('Look It Up !', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(align(data.green, 20))
    
});
}

module.exports = {banner};