const path = require('path');
const express = require('express');
const routes = require('./routes');

let app = express();

// Special Middleware logger
app.use((req, res, next) => {
    console.log(req.url);
    next();
});

app.get('/', (req, res) => {
    res.send('Hello from the web server side... use /index.html directly to see the rest of this lab.');
});

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(3000, () => {
    console.log('Server Running on port 3000');
}).on('error', error => {
    console.log(error.message);
    process.exit(1);
});