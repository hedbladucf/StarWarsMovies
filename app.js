var express = require('express');

var app = express();

app.set('view engine', 'ejs');

var routes = require('./routes');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

/* ROUTES */

// Home
app.get('/', routes.home);
// movie_single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);
// NotFound
app.get('*', routes.notFound);


// Listens on port 3000 || production PORT
app.listen(process.env.PORT || 3000);