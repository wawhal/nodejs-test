const express = require('express');
const http = require('http');
const url = require('url');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/req', function (request, response) {
    var number = request.body.number;
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify({double: number*2}));
});

app.listen(3000, () => {
  console.log('Listening on 3000');
});
