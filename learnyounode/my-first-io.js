/*Write a program that uses a single synchronous filesystem operation to read 
a file and print the number of newlines it contains to the console, similar 
to running cat files | wc -l

the full path to the files will bea read as the first cmd argument
*/

var args = process.argv;

var fs = require('fs');

var fileBuffer = fs.readFileSync(args[2]);

var str = fileBuffer.toString();

var nlCount = str.split('\n').length - 1;

console.log(nlCount);




