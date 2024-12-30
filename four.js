// setup four 
// read and write
// fs module

const fs = require('fs');
// path for write 
const path = require('path');


// UTF8
// readFile
fs.readFile('./s.4/text.txt', 'utf8', (err, data) => {
    if (err)throw err;
    console.log(data);
})
// Error
process.on('uncaughtException', err => {
    console.log('the err: ${err}');
    process.exit(1);
});

// data.toString()
// readFile
// fs.readFile('./s.4/text.txt', (err, data) => {
//     if (err)throw err;
//     console.log(data.toString());
// })
// // Error
// process.on('uncaughtException', err => {
//     console.log('the err: ${err}');
//     process.exit(1);
// });


// no add .toString()
// readFile
// fs.readFile('./s.4/text.txt', (err, data) => {
//     if (err)throw err;
//     console.log(data);
// })
// // Error
// process.on('uncaughtException', err => {
//     console.log('the err: ${err}');
//     process.exit(1);
// });



// writeFile
// fs.writeFile(path.join(__dirname, 'S.4', 'Hi.txt'), '\n\nGoodby December', (err) => {
//     if (err)throw err;
//     console.log('Welcome Janaury');
// });
// process.on('uncaughtException', err => {
//     console.log('the err: ${err}');
//     process.exit(1);
// });

// test by AI
fs.writeFile(path.join(__dirname, 'S.4', 'Hi.txt'), '\n\nGoodby December', (err) => {
    if (err) {
        console.error('Error writing file:', err);
        process.exit(1);
    }
    console.log('Welcome Janaury');
});