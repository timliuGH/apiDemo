const express = require('express');
const app = express();
const port = 8080;
const ip = "0.0.0.0";
const request = require('request');

app.get('/results', (req, res) => {
    request('http://omdbapi.com/?apikey=thewdb&s=california', (error, response, body) => {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
});


app.listen(port, ip, () => {
    console.log(`Starting app on ${port}`);
});