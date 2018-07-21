'use strict';

const express = require('express');
const app = express();
// require('dotenv').config();

app.use('/', require('./routes/routes.js'));

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
    });
}

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
});