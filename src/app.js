let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/cor', (req, res) => {
    res.send({cor: 'vermelho'});
});

module.exports = app;