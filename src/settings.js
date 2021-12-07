const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const rutas = require('./routes/routesmanager');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// routes
rutas(app);

// static files
app.use(express.static(path.resolve(__dirname, 'public')));

// 404 handler
app.use((req, res, next) => {
    res.status(404).render('404');
});

module.exports = app;