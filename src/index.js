import React from 'react';
import ReactDOM from 'react-dom';

// class MovieCard extends React.Component {
//   render() {
//     return (
//       <div className="movie-card">
//         <img src="http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg" alt="Mad Max: Fury Road" />
//         <h2>Mad Max: Fury Road</h2>
//         <small>Genres: Action, Adventure, Science Fiction, Thriller</small>
//       </div>
//     );
//   }
// }

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img
          src={this.props.poster}
          alt={this.props.title}
        />
        <h2>{this.props.title}</h2>
        <small>Genres: {this.props.genres.join(', ')}</small>
      </div>
    );
  }
}

// ReactDOM.render(
//   <MovieCard />,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <MovieCard
//     title="Mad Max: Fury Road"
//     poster="http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
//     genres={['Action', 'Adventure', 'Science Fiction', 'Thriller']}
//   />,
//   document.getElementById('root')
// );

const madMaxGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

ReactDOM.render(
  <MovieCard
    title="Mad Max: Fury Road"
    poster="http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
    genres={madMaxGenres}
  />,
  document.getElementById('root')
);

const jurassicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

MovieCard.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png'
};

ReactDOM.render(
  <MovieCard
    title="Jurassic World"
    poster="http://image.tmdb.org/t/p/w342/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg"
    // ^^uses default is not included^^
    genres={jurassicWorldGenres}
  />,
  document.getElementById('root')
);
