console.log('hello world');

// write files
const fs = require('fs');
const content = 'Here is my first attempt at writing a file!';

fs.writeFile('/home/peregrinning/Documents/Coding/TOP/learn-node/initial.txt', content, err => {
    if (err) {
        console.log(err);
    }
})
// worked!!
//
// write files via fsPromises module
const fsp = require('fs/promises');
const example = async () => {
    try {
        const content = 'Write a file with fs/promises module!';
        await fsp.writeFile('/home/peregrinning/Documents/Coding/TOP/learn-node/promises.txt', content);
    } catch (err) {
        console.log(err);
    }
}
example();
// worked!!
//
// append to a file
const appendContent = ' Append this to a file!';
fs.appendFile('/home/peregrinning/Documents/Coding/TOP/learn-node/initial.txt', appendContent, err => {
    if (err) {
        console.log(err);
    }
})
// worked!!
//
// append to a file via fsPromises
const append = async () => {
    try {
        await fsp.appendFile('/home/peregrinning/Documents/Coding/TOP/learn-node/promises.txt', appendContent);
    } catch (err) {
        console.log(err);
    }
}
append();
// worked!!
//
// read a file
const location = '/home/peregrinning/Documents/Coding/TOP/learn-node/'
fs.readFile(`${location}initial.txt`, 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
})
// worked!!
//
// read a file via fs/promises
const readP = async () => {
    try {
        const data = await fsp.readFile(`${location}promises.txt`, { encoding: 'utf-8'});
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
readP();
// worked!!