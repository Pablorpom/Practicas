const categoryList = [
    {
        name: 'Mature',
        letter: 'M'
    },
    {
        name: 'Teen',
        letter: 'T'
    },
    {
        name: 'Kids',
        letter: 'K'
    },
    {
        name: 'All',
        letter: 'A'
    },
  
];

const moviesList = [
    {
        title: 'Matrix',
        rating: 'M'
    },
    {
        title: 'Nemo',
        rating: 'K'
    },
    {
        title: 'Endgame',
        rating: 'T'
    },
    {
        title: 'CAP',
        rating: 'T'
    },
    {
        title: 'XXX',
        rating: 'M'
    },
    
];

const allMovies = document.querySelector('.allMovieList');
const tMovies = document.querySelector('.tMovieList');
const mMovies = document.querySelector('.mMovieList');
const kMovies = document.querySelector('.kMovieList');
const filter = document.querySelector('.categories')

const mMoviesFilter = moviesList.filter((movie) => {
    return movie.rating === 'M'
});
const tMoviesFilter = moviesList.filter((movie) => {
    return movie.rating === 'T';
});
const kMoviesFilter = moviesList.filter((movie) => {
    return movie.rating === 'K';
});

moviesList.forEach((movie) => { allMovies.innerHTML += `<li>${movie.title}</li>`}); 
mMoviesFilter.forEach((movie) => { mMovies.innerHTML += `<li>${movie.title}</li>`}); mMovies.style.display = 'none';
tMoviesFilter.forEach((movie) => { tMovies.innerHTML += `<li>${movie.title}</li>`}); tMovies.style.display = 'none';
kMoviesFilter.forEach((movie) => { kMovies.innerHTML += `<li>${movie.title}</li>`}); kMovies.style.display = 'none';

function hide (list) {
    list.style.display = 'none'
};
function show (list) {
    list.style.display = 'block'
};

filter.addEventListener('change', () =>{
    if(filter.value === categoryList[0].letter){
        show (mMovies);
        hide (allMovies);
        hide (tMovies);
        hide (kMovies);
    } else if(filter.value === categoryList[1].letter){
        show (tMovies);
        hide (allMovies);
        hide (mMovies);
        hide (kMovies);
    } else if(filter.value === categoryList[2].letter){
        show (kMovies);
        hide (allMovies);
        hide (tMovies);
        hide (mMovies);
    } else if(filter.value === categoryList[3].letter){
        show (allMovies);
        hide (mMovies);
        hide (tMovies);
        hide (kMovies);
    }
});