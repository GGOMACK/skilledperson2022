const express = require('express');

const PORT = 8080;

// App
const app = express()
app.get('/', (req, res) => {
        res.send('Hello world\n');
});

app.listen(PORT);