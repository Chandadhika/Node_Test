// setup five 
// add writeFile in readFile
// add readFile in writeFile


const fs = require('fs');
const path = require('path');


// add writeFile in readFile
// fs.readFile('./s.5/text.txt', 'utf8', (err, data) => {
//     if (err)throw err;
//     console.log(data);

//     fs.writeFile(path.join(__dirname, 'S.5', 'Hi.txt'), '\n\nGoodby December', (err) => {
//         if (err)throw err;
//         console.log('Welcome Janaury');
//     });
// })
// // Error
// process.on('uncaughtException', err => {
//     console.log('the err: ${err}');
//     process.exit(1);
// });



// add readFile in writeFile
fs.writeFile(path.join(__dirname, 'S.5', 'Come.txt'), '\n\nGoodby December', (err) => {
    if (err)throw err;
    console.log('Welcome Janaury, 2025');

    fs.readFile('./s.5/test.txt', 'utf8', (err, data) => {
        if (err)throw err;
        console.log(data);
    });
});

// Error
process.on('uncaughtException', err => {
    console.log('the err: ${err}');
    process.exit(1);
});