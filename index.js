const express = require('express');
const path = require('path');
const app = express();
const port = '3000';


/* Middlewares
app.use((request, response, next) => {
	console.log(request.headers);
	next();
});

app.use((request, response, next) => {
	request.chance = Math.random();
});

app.get('/', (request, response) => {
	// response.send('Hello');
	response.json({
		chance: request.chance
	});
});
*/

/* Error handling
app.get('/', () => {
	throw new Error('oops');
});

app.use((error, request, response, next) => {
	console.log(error);
	response.status(500).send('Something broke!');
});

app.listen(port, (err) => {
	if (err) return console.log(err);
	console.log(`Server Listening at port ${ port }`);
});
*/

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response) => {
	response.render('home', {
		name: 'Joe'
	})
});

app.listen(port, (err) => {
	if (err) return console.log(err);
	console.log(`Server Listening at port ${ port }`);
});

/* Create a server using http
const http = require('http');
const port = '3000';

const requestHandler = (request, response) => {
	console.log(request.url);
	response.end('Node JS Server.');
}

const server = http.createServer(requestHandler);

server.listen(port, (error) => {
	if (error) return console.log(error);

	console.log(`Server Listening at port ${ port }`);
});
*/
