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

