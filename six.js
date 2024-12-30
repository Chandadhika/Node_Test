// setup add rename, writeFile, appendFile and renameFile in readFile
const fs = require('fs');
const path = require('path');


// readFile
fs.readFile('./S.6/test.txt', 'utf8', (err, data) => {
    if (err)throw err;
    console.log(data); 

    // writeFile
    fs.writeFile(path.join(__dirname, 'S.6', 'Hello.txt'), 'Hello Yangon', (err) => {
        if (err)throw err;
        console.log('Myanmar'); 
        
        // // appendFile or update
        fs.appendFile(path.join(__dirname, 'S.6', 'Hello.txt'), '\n\nMandalay', (err) => {
                if (err)throw err;
                console.log('Mandalay'); 

                // rename file or change file name
                fs.rename(path.join(__dirname, 'S.6', 'Hello.txt'), path.join(__dirname, 'S.6', 'PBC.txt'), (err) => {
                    if (err)throw err;
                    console.log('PBC'); 
                });
            });
    });
});