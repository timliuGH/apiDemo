const express = require('express');
const app = express();
const port = 8080;
const ip = "0.0.0.0";
const request = require('request');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('search');
});

app.get('/results', (req, res) => {
    let search = req.query.search;
    let url = "http://omdbapi.com/?apikey=thewdb&s=" + search;
    request(url, (error, response, body) => {
        if (!error && response.statusCode == 200) {
            let parsedBody = JSON.parse(body);
            res.render('results', {data: parsedBody});
        }
    });
});

app.listen(port, ip, () => {
    console.log(`Starting app on ${port}`);
});