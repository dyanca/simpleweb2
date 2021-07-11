const express = require('express');
const os = require("os");

const app = express();

app.get('/', (req, res) => {
    const hostname = os.hostname();
    res.send('<div><h1>Simpleweb2 via  ' + hostname + '</h1></div>');
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});