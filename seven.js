// setup seven
// async await
// fsPromises
const fsPromises = require('fs').promises;
const path = require('path');

const cdd = async() => {
    try {
        const data =
        // readFile
        await fsPromises.readFile(
            path.join(__dirname, 'S.7', 'abc.txt'), 'utf8',
        );
        console.log(data);

        // writeFile
        await fsPromises.writeFile(
            path.join(__dirname, 'S.7', '123.txt'), data + '\n\nLashio',
        );
        
        //appendFile
        await fsPromises.appendFile(
            path.join(__dirname, 'S.7', '123.txt'), '\n\nMuseMyo',
        );

        // rename file
        await fsPromises.rename(
            path.join(__dirname, 'S.7', '123.txt'), path.join(__dirname, 'S.7', 'pbc.txt'),
        );
        
    } catch (error) {
        console.log(err);
    }
}
cdd();