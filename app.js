'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var headerReader = require('./routes/headerReader.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static('./public'));
    
var port = process.env.PORT || 8080;
    
headerReader(app);

app.listen(port, function() {
    console.log('Node.js listening on port ' + port);
});