const express = require('express');
const serverless = require('serverless-http');


const app = express();


router.get('/', (req, res) => {
	res.json({
		'hello' : 'Hi I\'am Using Express JS'
	});
});


app.use('/.netlify/functions/api',router);


module.exports.handler = serverless(app);
