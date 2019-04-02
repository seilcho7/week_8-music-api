const express = require('express');
const app = express();
const port = 3000;

const musicRouter = require('./routes/music');

app.use('/music', musicRouter);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});