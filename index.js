var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired
	},
	render: function() {
		return React.createElement("li", {},
			React.createElement(Movie, {key: movie_id, movie_title, movie_genre},);
	}
});

var MovieTitle = React.createClass({
	propTypes: {
		title: React.PropTypes.string.isRequired
	},
	render: function() {
		return React.createElement("h2", {},
			React.createElement(MovieTitle, {key: movie_title, movie_id, movie_genre},);
	}
});

var MovieDescription = React.createClass({
	propTypes: {
		description: React.PropTypes.string.isRequired
	},

	render: function() {
		return React.createElement("p", {},
			React.createElement(MovieDescription, {key: movie_description, movie_id, movie_genre},);
	}
});

var MoviesList = React.createClass({
	propTypes: {
		list: React.PropTypes.string.isRequired
	},
	render: function() {
		return React.createElement( "li", {},
			React.createElement(MoviesList, {key: movie_genre movie_description, movie_id},);
	}
});


