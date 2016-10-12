// Include JSON file that contains movies
var moviesJSON = require('../movies.json');

// Home
exports.home = function(req, res) {

	var movies = moviesJSON.movies;


	res.render('home', {
		title : "Star Wars Movies",
		movies: movies
	});
}; 

// movie_single
exports.movie_single = function(req, res) {
	var episode_number = req.params.episode_number;
	res.send("this is a request for episode " + episode_number);
};

// notFound
exports.notFound = function(req, res) {
	res.send("This is not the page you're looking for...");
};