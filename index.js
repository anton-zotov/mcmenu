#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const http = require('http');
const cors = require('cors')
const express = require('express');
const burgers = require('./burgers')


const app = express();
app.set('port', 8038);
app.use(cors());

app.get('/api/burgers', function (req, res) {
	res.json(burgers());
});
app.use(express.static(path.join(__dirname, 'client/build')));

http.createServer(app).listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});
