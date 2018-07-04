const fs = require('fs');

/* Synchronous way of reading a file
let content;
try {
	content = fs.readFileSync('README.md', 'utf-8');
} catch (err) {
	console.log(err);
}

console.log(content);
*/

/* Error-first callback way of reading a file
fs.readFile('README.md', 'utf-8', function (error, content) {
	if (error) {
		return console.log(error);
	}

	console.log(content);
});
*/

/* Something went wrong
console.log('Reading File . . .');
fs.readFile('README.md', 'utf-8', (err, content) => {
	if (err) return console.log(err);

	console.log(content);
});
console.log('Done Reading File.');
*/


function stats (file) {
	return new Promise ( (resolve, reject) => {
		fs.readFile(file, (err, data) => {
			if (err) reject(err);
			resolve(data);
		});
	} ); 
}

async function asyncCall () {
	console.log('Reading File . . .');
	
	console.log(`The file is: \n${ await stats('README.md') }`);
	console.log(`The file is: \n${ await stats('index.js') }`);
	// console.log(`The file is: \n${ await Promise.all( [stats('README.md'), stats('index.js')] ) }`);
	
	console.log('Done Reading File.');
}

asyncCall();

// Filter Array and get all the nnumbers that are bigger than 2
// console.log([2,4,1,5,3].filter( num => num > 2 ));

