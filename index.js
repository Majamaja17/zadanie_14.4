var movies = [
    {
        id: 1,
        title: 'Ojciec Chrzestny',
        desc: 'Film o cudownym klimacie i obsadzie aktorów.',
    },
    {
        id: 2,
        title: 'China Town',
        desc: 'Film ciężko sprecyzować o czym ale warty obejrzenia.',
    },
    {
        id: 3,
        title: 'Sprawa Kramerów',
        desc: 'Film o rodzicielstwie i odpowiedzialności.',
    }
];

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    },
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    },
});
  
var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('li', {key: this.props.movie.id},
            React.createElement(MovieTitle, {title: this.props.movie.title}),
            React.createElement(MovieDescription, {desc: this.props.movie.desc})
            )
        )
    },
});

var moviesElements = movies.map(function(movie) {
    return React.createElement(Movie, {key: movie.id, movie:movie});
});
  
var moviesList = React.createClass({
    render: function () {
        return (React.createElement('ul', {}, moviesElements));
    }
});

 var element = React.createElement('div', {},
    React.createElement('h1', {}, 'Filmy'),
    React.createElement(moviesList, {})
);
  
ReactDOM.render(element, document.getElementById('app')); 
