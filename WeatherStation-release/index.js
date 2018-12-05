const express = require('express');

const server = require('./server').default;

const app = express();

app.use('/', express.static('client'));

app.use('/api', server);

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
	console.log('Listening ' + PORT)
})