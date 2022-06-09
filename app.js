const express = require('express');
const port = 3001;
const server = express();


server.set('view engine', 'hbs');

server.get('/', function (req, res) {
    console.log('user visited server');
    res.render('index');
})

server.listen(port, (err) => {
    if (err) { console.log('error occred') }
    console.log(`server listening on port: ${port}`);
})