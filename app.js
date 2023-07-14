const movies = [
  {
    title: 'Amadeus',
    score: 99
  },
  {
    title: 'Stand By Me',
    score: 85
  },
  {
    title: 'Paradise',
    score: 95
  }
]

const newMovies = movies.map(function (movie) {
  return `${movie.title} - ${movie.score / 10}`
})
console.log(newMovies);

const newMovies2 = movies.map(movie => {
  return `${movie.title} - ${movie.score / 100}`
})
console.log(newMovies2);

const newMovies3 = movies.map(movie => (
  `${movie.title} - ${movie.score / 1000}`
))
console.log(newMovies3); 