var fs = require('fs');

var buildPath = 'build';

// Funcs
var deleteFolderRecursive = function(path) {
    if( fs.existsSync(path) ) {
        fs.readdirSync(path).forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.lstatSync(curPath).isDirectory()) {
                deleteFolderRecursive(curPath);
            } else {
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

var clearDir = function(path) {
    fs.readdirSync(path).forEach(function(file,index){
        var curPath = path + "/" + file;
        if(fs.lstatSync(curPath).isDirectory()) {
            deleteFolderRecursive(curPath);
        } else {
            fs.unlinkSync(curPath);
        }
    });
};

var copyFiles = function (path, files) {
    for (var i = 0; i < files.length; ++i) {
        fs.createReadStream(files[i]).pipe(fs.createWriteStream(path + '/' + files[i]));
    }
};

// Clear build
clearDir(buildPath);

// Copy package and readme
copyFiles(buildPath, ['package.json', 'README.md']);