const path = require('path')
const fs = require('fs')

const directoryPath = "/home/khai/film-web/public/photos/Boston";
var images = [];
fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log("Unable to read directory!");
    }
    files.forEach(function (file) {
        console.log(file);
        images.push(file);
    });
}
);

for (var i = 0; i < images.size(); i++) {
    
}