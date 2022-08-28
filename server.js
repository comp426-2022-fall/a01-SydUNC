const http = require('http');

const fs = require('fs');

const minimist = require('minimist');

const args = require('minimist')(process.argv.slice(2));

const port = (args.port || 3000);

fs.readFile('./public/index.html', (err, data) => {
	   if (err) {
		         console.error(err);
		         return;
		       }
	    const server = http.createServer((req, res) => {
		       	res.statusCode = 200
		       	res.setHeader('Content-Type', 'text/html')
		       	res.end(data)
		    	});

	    server.listen(port, () => {
		       		console.log(`Server listening on port ${port}`)
		    	});

});

