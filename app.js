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
// append();

// worked!!
//
// read a file
const location = '/home/peregrinning/Documents/Coding/TOP/learn-node/'
fs.readFile(`${location}initial.txt`, 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(data);
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
// readP();

// worked!!
//
// learning URL
const myURL = new globalThis.URL('/foo', 'https://example.com/');
// console.log(myURL);

const anURL = new globalThis.URL('https://example.org/foo#bar');
// console.log(anURL);
anURL.hash = 'boom';
// console.log(anURL.href);

const hostURL = new globalThis.URL('https://example.org:81/foobar');
// console.log(hostURL.host);
hostURL.host = 'example.org:82';
// console.log(hostURL.href);

const hostnameURL = new globalThis.URL('https://example.org:801/foobar');
// console.log(hostnameURL.hostname);
hostnameURL.hostname = 'example.net';
// console.log(hostnameURL.href);
hostnameURL.host = 'example.org:802';
// console.log(hostnameURL.href);

const hrefURL = new globalThis.URL('https://example.com/dude/this/works');
// console.log(hrefURL.href);
hrefURL.href = 'https://example.org/thisworks/possibly';
// console.log(hrefURL.href);

const originURL = new globalThis.URL('https://example.com/foo/bar?baz');
// console.log(originURL.origin);

const pwURL = new globalThis.URL('hhtps://abc:xyz@example.com');
// console.log(pwURL.password);
pwURL.password = '1234';
// console.log(pwURL.href);

const pathURL = new globalThis.URL('https://example.org/abc/xyz?1234');
// console.log(pathURL.pathname);
pathURL.pathname = '/asdfghjkl'
// console.log(pathURL.href);

const portURL = new globalThis.URL('https://example.com:9999');
// console.log(portURL.port);
portURL.port = '443';
// console.log(portURL.port);
// console.log(portURL.href);
portURL.port = '12345';
// console.log(portURL.href);
portURL.port = 'asdfg';
// console.log(portURL.port);
portURL.port = '45678dfghjk';
// console.log(portURL.port);

const protoURL = new globalThis.URL('https://example.log');
// console.log(protoURL.protocol);
protoURL.protocol = 'ftp';
// console.log(protoURL.href);

const searchURL = new globalThis.URL('https://example.org/abd?12345');
// console.log(searchURL.search);
searchURL.search = 'supercalifragilistic';
// console.log(searchURL.href);

const paramsURL = new globalThis.URL('https://example.org/abc?foo=~bar');
console.log(paramsURL.search); // returns ?foo=~bar
paramsURL.searchParams.sort();
console.log(paramsURL.search); // returns ?foo=%7Ebar