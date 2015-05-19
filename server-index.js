var app = require('express')();

var homeRouter = require('./routes/home');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', homeRouter);